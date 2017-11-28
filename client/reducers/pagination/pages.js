import { reducerCreator } from 'Utils/reducer'
import * as fromItems from './items'

/* STATE */
/* will store a list of issue ids at each page */
const initialState = {}

/* REDUCER HANDLER */
const handleReceive = (state, action) => ({
	...state,
	[action.payload.page]: action.payload.results.map(item => item.id)
})

/* REDUCER */
const reducer = reducerCreator(
	initialState,
	{
		[fromItems.receivePages.type]: handleReceive
	}
)

export default reducer

/* GETTER */
export const getByPage = (state, page) => state[page]
