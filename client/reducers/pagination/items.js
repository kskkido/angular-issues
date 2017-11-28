/* eslint-disable no-param-reassign */
import { actionCreator, reducerCreator } from 'Utils/reducers'

/* ACTION CREATORS */
export const receiveItems = actionCreator('PAGES_RECEIVE')

/* STATE */
/* will store issue by id */
const initialState = {}

/* HANDLE REDUCER */
const handleReceive = (state, action) => {
	console.log(action, 'huh')
	const items = action.payload.items.reduce(
		(acc, item) => {
			acc[item.id] = item

			return acc
		},
		{}
	)

	return {
		...state,
		...items
	}
}

/* REDUCER */
const reducer = reducerCreator(
	initialState,
	{
		[receiveItems.type]: handleReceive
	}
)

export default reducer

/* GETTER */
export const getItemById = (state, id) => state[id]
