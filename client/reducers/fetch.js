import { compose, prop } from 'ramda'
import {
	actionCreator,
	reducerCreator
} from 'Utils/reducers'

/* ACTION CREATOR */
export const startFetch = actionCreator('FETCH_START')
export const successFetch = actionCreator('FETCH_SUCCESS')
export const errorFetch = actionCreator('FETCH_ERROR')

/* STATE */
const initialState = {
	fetching: false,
	error: ''
}

/* REDUCER HANDLERS */
const handleStart = () => ({
	...initialState,
	fetch: true
})

const handleSuccess = () => ({
	...initialState,
})

const handleError = (state, action) => ({
	...initialState,
	error: action.payload.error
})

/* REDUCER */
const reducer = reducerCreator(
	initialState,
	{
		[startFetch.type]: handleStart,
		[successFetch.type]: handleSuccess,
		[errorFetch.type]: handleError,
	}
)

export default reducer

/* GETTER */
const getState = prop('fetch')

export const getStatus = compose(prop('fetching'), getState)
export const getError = compose(prop('error'), getState)
