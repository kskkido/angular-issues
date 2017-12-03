import * as fetchActions from 'Actions/fetch'
import { getFetchStatus } from 'Reducers'
import fetch from './utils'

const apiMiddleware = ({ getState }) => next => (action) => {
	if (action.type === 'REQUEST_API') {
		const {
			cache,
			endpoint,
			schema,
			onSuccess,
		} = action.payload

		const state = getState()
		console.log(endpoint, 'ENODIFJODIJFODIFJOSDIFJODSIFJOSIDJF')
		/* don't fetch if it already exists or in the middle of fetching */
		if (cache(state) || getFetchStatus(state, endpoint)) {
			return Promise.resolve()
		}

		next(fetchActions.requestFetch(endpoint))

		return fetch(schema, endpoint)
			.then(
				(res) => {
					next(onSuccess(res, endpoint))
					next(fetchActions.successFetch(endpoint))
				},
				error => next(fetchActions.failureFetch(error, endpoint))
			)
	}

	return next(action)
}

export default apiMiddleware
