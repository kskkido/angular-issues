/* reducer factory */
const reducerCreator = (initialState, handlerObj) =>
	(state = initialState, action) =>
		action.type in handlerObj ?
			handlerObj[action.type](state, action) :
			state

export default reducerCreator
