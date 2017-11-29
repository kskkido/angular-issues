import { actionCreator, reducerCreator } from 'Utils/reducers'

/* ACTION CREATOR */
export const setCurrent = actionCreator(
	'SET_CURRENT_AGE',
	page => ({ key: 'current', page })
)

export const setNext = actionCreator(
	'SET_NEXT_PAGE',
	page => ({ key: 'next', page })
)

export const setLast = actionCreator(
	'SET_LAST_PAGE',
	page => ({ key: 'last', page })
)

/* STATE */
const initialState = {}

/* REDUCER HANDLERS */
const handleChange = (state, action) => ({
	...state,
	[action.payload.key]: action.payload.page
})

/* REDUCER */
const reducer = reducerCreator(
	initialState,
	{
		[setCurrent.type]: handleChange,
		[setNext.type]: handleChange,
		[setLast.type]: handleChange
	}
)

export default reducer

/* GETTER */
export const getCurrentPageNumber = state => state.current
