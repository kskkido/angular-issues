import { identity } from 'ramda'

export const actionCreator = (type, handlerFn) =>
	Object.assign(
		payload => ({ type, payload: handlerFn && handlerFn(payload) }),
		{ type }
	)

export const reducerCreator = (initialState, handlerObj) =>
	(state = initialState, action) => {

		return action.type in handlerObj ?
			handlerObj[action.type](state, action) :
			state
	}

export const filterAction = filterFn => reducer => (state, action) =>
	filterFn(action) ?
		reducer(state, action) :
		state
