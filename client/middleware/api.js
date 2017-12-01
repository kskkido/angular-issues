import * as issuesActions from 'Actions/issues'
import * as fetchActions from 'Actions/fetch'
import { getIssuesByPage, getFetchStatus } from 'Reducers'
import fetch from 'Utils/fetch'

const apiMiddleware = ({ getState }) => next => (action) => {
	if (action.type === issuesActions.requestApi.type) {
		const { endpoint, page, schema } = action.payload
		const state = getState()

		/* don't fetch if it already exists or in the middle of fetching */
		if (getIssuesByPage(state, page) || getFetchStatus(state, endpoint)) {
			return null
		}

		next(fetchActions.requestFetch(endpoint))

		return fetch(schema, endpoint)
			.then(
				(res) => {
					next(issuesActions.receivePage(page, res))
					next(fetchActions.successFetch(endpoint))
				},
				error => next(fetchActions.failureFetch(error, endpoint))
			)
	}

	return next(action)
}

export default apiMiddleware
