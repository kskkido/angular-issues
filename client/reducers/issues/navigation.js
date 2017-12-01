import reducerCreator from 'Reducers/utils'
import { receivePage } from 'Actions/issues'

/* STATE */
const initialState = {
	current: 1,
	last: null,
}

/* HANDLE REDUCER */
const handleNavigation = (state = initialState, action) => {
	const { page, response } = action.payload

	return {
		...state,
		current: page,
		last:	Math.max(page, response.last)
	}
}

/* REDUCER */
const reducer = reducerCreator(
	initialState,
	{
		[receivePage.type]: handleNavigation
	}
)

export default reducer

/* GETTERS */
export const getCurrentPage = state => state.current
export const getNextPage = state => state.next
export const getLastPage = state => state.last
