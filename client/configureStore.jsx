import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const configureStore = () => {
	const middlewares = [thunk]
	let applyHandler = applyMiddleware

	if (process.env.NODE_ENV === 'development') {
		middlewares.push(createLogger({ collapsed: true }))
		applyHandler = composeWithDevTools(applyHandler)
	}

	const store = createStore(
		rootReducer,
		applyHandler(...middlewares)
	)

	return store
}

export default configureStore
