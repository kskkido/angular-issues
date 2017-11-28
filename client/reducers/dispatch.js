import * as fromFetch from './fetch'

/* dispatches fetch events along with provided fetchFn */
const createFetch = (fetchFn, onSuccess) => (...args) => (dispatch, getState) => {
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
			error => dispatch(fromFetch.error({ error }))
		)
}

export default createFetch
