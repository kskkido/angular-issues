/* eslint-disable no-underscore-dangle */
/* global window */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import configureStore from 'Common/configureStore'
import ScrollTop from 'Components/ScrollTop'
import App from 'Common/App'

const store = configureStore(window.__INITIAL_STATE__)

delete window.__INITIAL_STATE__

const hydrate = (Component) => {
	ReactDOM.hydrate(
		<AppContainer>
			<BrowserRouter>
				<ScrollTop>
					<Provider store={store}>
						<Component />
					</Provider>
				</ScrollTop>
			</BrowserRouter>
		</AppContainer>
		, document.getElementById('app')
	)
}

hydrate(App)

if (module.hot) {
	/* method suggested in react-hot-module docs did not work */
	module.hot.accept('Common/App', () => { hydrate(require('Common/App').default) })
}
