import { reducerCreator } from 'Utils/reducers'
import * as fromItems from './items'

/* STATE */
/* will store a list of issue ids at each page */
const initialState = {}

/* REDUCER HANDLER */
const handleReceive = (state, action) => ({
	...state,
	[action.payload.page]: action.payload.items.map(item => item.id)
})

/* REDUCER */
const reducer = reducerCreator(
	initialState,
	{
		[fromItems.receiveItems.type]: handleReceive
	}
)

export default reducer

/* GETTER */
export const getPage = (state, page) => state[page]
