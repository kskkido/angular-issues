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

console.log(window.__initialState__, 'INITIAL STTE')
const store = configureStore(window.__initialState__)

const render = (Component) => {
	ReactDOM.render(
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

render(App)

if (module.hot) {
	console.log(module.hot, 'rerender bitch')
	/* method suggested in react-hot-module docs did not work */
	module.hot.accept('Common/App', () => { render(require('Common/App').default) })
}
