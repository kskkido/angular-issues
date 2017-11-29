import { combineReducers } from 'redux'
import {
	actionCreator,
	reducerCreator,
	filterAction
} from 'Utils/reducer'

export default (endpoint) => {
	/* ACTION CREATORS */
	const requestPages = actionCreator(
		'REQUEST_PAGE',
		page => ({
			page,
			endpoint
		})
	)

	const receivePages = actionCreator(
		'RECEIVE_PAGE',
		(page, items) => ({
			page,
			items,
			endpoint
		})
	)

	const setCurrent = actionCreator(
		'SET_CURRENT_PAGE',
		page => ({
			page,
			endpoint,
			key: 'current'
		})
	)

	const setNext = actionCreator(
		'SET_NEXT_PAGE',
		page => ({
			page,
			endpoint,
			key: 'next'
		})
	)

	const setLast = actionCreator(
		'SET_LAST_PAGE',
		page => ({
			page,
			endpoint,
			key: 'last'
		})
	)

	/* REDUCER HANDLERS */
	const handleReceiveItems = (state, action) => {
		const nextState = Object.assign({}, state)

		return action.payload.items.reduce(
			(acc, item) => {
				acc[item.id] = item

				return acc
			},
			nextState
		)
	}

	const handleReceivePages = (state, action) => ({
		...state,
		[action.payload.page]: action.payload.items.map(item => item.id)
	})

	const handleChangePage = (state, action) => ({
		...state,
		[action.payload.key]: action.payload.page
	})

	/* REDUCERS */
	const filterByEndpoint = filterAction(action => action.payload.endpoint !== endpoint)

	const itemsReducer = reducerCreator(
		{},
		[receivePages.type]: handleReceiveItems
	)

	const pagesReducer = reducerCreator(
		{},
		[receivePages.type]: handleReceivePages
	)

	const pageReducer = reducerCreator(
		{ current: 1 },
		[setCurrent.type]: handleChangePage,
		[setNext.type]: handleChangePage,
		[setLast.type]: handleChangePage,
	)

	const reducer = filterByEndpoint(combineReducers({
		items: itemsReducer,
		pages: pagesReducer,
		page: pageReducer
	}))

	/* GETTERS */
	const getByPage = (state, page) => state.pages[page]
	const getItemById = (state, id) => state.items[id]
	const getCurrentPage = state => state.page.current
	const getNextPage = state => state.page.next
	const getLastPage = state => state.page.last

	return {
		endpoint,
		requestPages,
		receivePages,
		setCurrent,
		setNext,
		setLast,
		reducer,
		getByPage,
		getItemById,
		getCurrentPage,
		getNextPage,
		getLastPage
	}
}
