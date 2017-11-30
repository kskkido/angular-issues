import reducerCreator from 'Reducers/utils'
import * as fetchActions from 'Actions/fetch'

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
		[fetchActions.requestFetch.type]: handleRequest,
		[fetchActions.failureFetch.type]: handleFailure,
		[fetchActions.successFetch.type]: handleSuccess
	}
)

export default reducer

/* GETTERS */
export const getError = state => state && state.error
export const getStatus = state => state && state.fetching
