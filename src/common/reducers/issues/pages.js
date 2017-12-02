import reducerCreator from 'Reducers/utils'
import { receivePage } from 'Actions/issues'

/* STATE */
const initialState = {}

/* HANDLE REDUCER */
const handleReceivePage = (state = initialState, action) => {
	const { page, response } = action.payload

	return {
		...state,
		[page]: response.result
	}
}

/* REDUCER */
const reducer = reducerCreator(
	initialState,
	{
		[receivePage.type]: handleReceivePage
	}
)

export default reducer

/* GETTERS */
export const getItemsByPage = (state, page) => state[page]
