import { actionCreator, reducerCreator } from 'Utils/reducers'

/* ACTION CREATOR */
export const requestFetch = actionCreator(
	'REQUEST_FETCH',
	(endpoint, params) => ({ endpoint, params })
)

export const successFetch = actionCreator('SUCCESS_FETCH')

export const failureFetch = actionCreator('FAILURE_FETCH', error => ({ error }))

/* STATE */
const initialState = {
	fetching: false,
	error: ''
}

/* REDUCER HANDLER */
const handleRequest = (state, action) => ({
	...initialState,
	fetching: true
})

const handleFailure = (state, action) => ({
	...initialState,
	error: action.payload.error
})

const handleSuccess = (state, action) => ({
	...initialState,
	fetching: false
})

/* REDUCER */


const reducer = reducerCreator(
	initialState,
	{
		[requestFetch.type]: handleRequest,
		[failureFetch.type]: handleFailure,
		[successFetch.type]: handleSuccess
	}
)

export default reducer

/* GETTERS */
export const getStatus = state => state.fetching
export const getError = state => state.error
