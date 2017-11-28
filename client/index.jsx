/* eslint-disable global-require */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import configureStore from './configureStore'
import App from './App'

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={configureStore()}>
				<Component />
			</Provider>
		</AppContainer>
		, document.getElementById('app')
	)
}

render(App)

if (module.hot) {
	console.log(module.hot, 'rerender bitch')
	/* method suggested in react-hot-module docs did not work */
	module.hot.accept('./App', () => { render(require('./App').default) })
}
