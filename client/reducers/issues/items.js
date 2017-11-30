import reducerCreator from 'Reducers/utils'
import { receivePage } from 'Actions/issues'

/* STATE */
const initialState = {}

/* HANDLE REDUCER */
const handleReceiveItems = (state = initialState, action) => {
	const { response } = action.payload
	const { entities, result } = response
	const nextState = Object.assign({}, state)

	return result.reduce(
		(acc, id) => {
			acc[id] = entities.items[id]

			return acc
		},
		nextState
	)
}

/* REDUCER */
const reducer = reducerCreator(
	initialState,
	{
		[receivePage.type]: handleReceiveItems
	}
)

export default reducer

/* GETTERS */
export const getItemById = (state, id) => state[id]
