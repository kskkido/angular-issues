import fetchPage from 'Utils/fetchApi'
import * as Fetch from 'Reducers/_fetch'
import Issues from 'Reducers/Issues'

/* should create function that normalizes response */

const apiMiddleware = ({ getState }) => next => (action) => {
	if (action.type === Issues.requestPage) {
		const { endpoint, page } = action.payload
		const state = getState().issues

		if (Issues.getByPage(state, page)) {
			return null
		}

		next(Fetch.requestFetch(endpoint))

		return fetchPage(page)
			.then(
				(res) => {
					next(Issues.receievePages(page, res))
					next(Fetch.successFetch())
				},
				error => next(Fetch.failureFetch(error))
			)
	}

	return next(action)
}

export default apiMiddleware
