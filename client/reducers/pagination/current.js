import { actionCreator, reducerCreator } from 'Utils/reducers'

/* ACTION CREATOR */
export const changePage = actionCreator('CURRENT_CHANGE')

/* STATE */
const initialState = 1

/* REDUCER HANDLERS */
const handleChange = (state, action) => action.payload.page

/* REDUCER */
const reducer = reducerCreator(
	initialState,
	{
		[changePage.type]: handleChange
	}
)

export default reducer

/* GETTER */
export const getCurrentPageNumber = state => state.current
