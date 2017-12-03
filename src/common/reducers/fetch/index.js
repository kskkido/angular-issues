import reducerCreator from 'Reducers/utils'
import * as fetchActions from 'Actions/fetch'
import endpointReducer, * as fromEndpoint from './endpoint'

/**
* Creates a new fetch state for every new endpoint
* So that we can handle each endpoint request separately
*/

/* STATE */
const initialState = {}

/* REDUCER HANDLER */
const handleAction = (state, action) => {
	const { endpoint } = action.payload

	return {
		...state,
		[endpoint]: endpointReducer(state[endpoint], action)
	}
}

/* REDUCER */
const reducer = reducerCreator(
	initialState,
	{
		[fetchActions.requestFetch.type]: handleAction,
		[fetchActions.failureFetch.type]: handleAction,
		[fetchActions.successFetch.type]: handleAction
	}
)

export default reducer

/* GETTERS */
export const getError = (state, endpoint) => fromEndpoint.getError(state[endpoint])
export const getStatus = (state, endpoint) => fromEndpoint.getStatus(state[endpoint])

