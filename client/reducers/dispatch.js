import fetchPage from 'Utils/fetchApi'
import * as fromFetch from './fetch'
import * as fromPagination from './pagination'

/* dispatches fetch events along with provided fetchFn */
export const createFetchDispatcher = (fetchFn, onSuccess) => (...args) => (dispatch, getState) => {
	if (fromFetch.getStatus(getState())) {
		return Promise.resolve()
	}

	dispatch(fromFetch.startFetch())

	return fetchFn(...args)
		.then(
			(res) => {
				dispatch(onSuccess(res))
				dispatch(fromFetch.successFetch())
			},
			error => dispatch(fromFetch.errorFetch({ error }))
		)
}

export const fetchIssues = page => createFetchDispatcher(
	fetchPage,
	res => fromPagination.receiveItems({
		page,
		items: res.data
	})
)(page)
