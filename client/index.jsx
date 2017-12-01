/* eslint-disable global-require */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'
import configureStore from './configureStore'
import ScrollTop from './components/ScrollTop'
import App from './App'

const store = configureStore()

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
	module.hot.accept('./App', () => { render(require('./App').default) })
}
