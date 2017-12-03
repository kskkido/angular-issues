/* eslint-disable react/jsx-filename-extension */
import serialize from 'serialize-javascript'
import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import routes from 'Common/routes'
import configureStore from 'Common/configureStore'
import App from 'Common/App'

const createHtml = ({ css, initialState, markup }) => {
	const serializedState = serialize(initialState)

	return `
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<link href="https://fonts.googleapis.com/css?family=Open+Sans:300|Roboto" rel="stylesheet">
			<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
			${css}
			<script>window.__INITIAL_STATE__=${serializedState}</script>
			<script async defer src="bundle.js"></script>
			<title>angular-issues</title>
		</head>
		<body>
			<div id="app">${markup}</div>
		</body>
	</html>
	`
}

const dispatchInitialActions = (store, req) =>
	routes.reduce((promises, route) => {
		const component = matchPath(req.path, route) && route.component
		const initialAction = component && component.initialAction

		if (initialAction) {
			const action = initialAction(req.url)

			promises.push(Promise.resolve(store.dispatch(action)))
		}

		return promises
	}, [])

const renderHtml = (req, res) => {
	const store = configureStore()
	const promises = dispatchInitialActions(store, req)

	if (promises.length === 0) {
		res.status(404).send('Not found')
		return null
	}

	return Promise.all(promises)
		.then(() => {
			const initialState = store.getState()
			const sheet = new ServerStyleSheet()

			const markup = renderToString(
				<Provider store={store}>
					<StaticRouter location={req.url} context={{}}>
						<StyleSheetManager sheet={sheet.instance}>
							<App />
						</StyleSheetManager>
					</StaticRouter>
				</Provider>
			)

			const html = createHtml({
				css: sheet.getStyleTags(),
				markup,
				initialState
			})

			res.send(html)
		})
}

export default renderHtml
