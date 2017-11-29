import { actionCreator, reducerCreator } from 'Utils/reducers'

export default (endpoint) => {
	/* ACTION CREATOR */
	const receiveItems = actionCreator(
		'PAGES_RECEIVE',
		(page, items) => ({
			page,
			items,
			endpoint
		})
	)

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
			[receiveItems.type]: handleReceive
		}
	)

	/* GETTER */
	const getPage = (state, page) => state[page]

	return {
		receiveItems,
		reducer,
		getPage
	}
}
