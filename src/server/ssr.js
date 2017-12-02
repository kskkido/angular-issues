/* eslint-disable react/jsx-filename-extension */
import serialize from 'serialize-javascript'
import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import routes from 'Common/routes'
import configureStore from 'Common/configureStore'
import App from 'Common/App'

const createHtml = (componentMarkup, initialState) => `
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link href="https://fonts.googleapis.com/css?family=Open+Sans:300|Roboto" rel="stylesheet">
		<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>
		<script async defer src="/bundle.js"></script>
		<script>window.__initialState__=${serialize(initialState)}</script>
		<title>shitty blog</title>
	</head>
	<body>
		<div id="app">${componentMarkup}</div>
	</body>
</html>
`

const dispatchInitialActions = (store, req) =>
	routes.reduce((acc, route) => {
		const component = matchPath(req.path, route) && route.component
		const initialAction = component && component.initialAction

		if (initialAction) {
			const action = initialAction(req.url)

			acc.push(Promise.resolve(store.dispatch(action)))
		}

		return acc
	}, [])

const renderHtml = (req, res) => {
	const store = configureStore()
	const dispatchPromises = dispatchInitialActions(store, req)

	return Promise.all(dispatchPromises)
		.then(() => {
			const initialState = store.getState()

			const markup = renderToString(
				<Provider store={store}>
					<StaticRouter location={req.url} context={{}}>
						<App />
					</StaticRouter>
				</Provider>
			)

			const html = createHtml(markup, initialState)

			res.send(html)
		})
}

export default renderHtml
