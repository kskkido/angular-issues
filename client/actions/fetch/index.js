import actionCreator from 'Actions/utils'

export const requestFetch = actionCreator(
	'REQUEST_FETCH',
	endpoint => ({ endpoint })
)
export const successFetch = actionCreator(
	'SUCCESS_FETCH',
	endpoint => ({ endpoint })
)
export const failureFetch = actionCreator(
	'FAILURE_FETCH',
	(error, endpoint) => ({
		error: error.message || error,
		endpoint
	})
)
