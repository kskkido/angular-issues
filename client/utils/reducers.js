import { identity } from 'ramda'

export const actionCreator = (type, handlerFn = identity) =>
	Object.assign(
		payload => ({ type, payload: handlerFn(payload) }),
		{ type }
	)

export const reducerCreator = (initialState, handlerObj) =>
	(state, action) =>
		action.type in handlerObj ?
			handlerObj[action.type](action) :
			state
