/**
 * Reducer factory
 * @param {object} initialState The initialState of the reducer
 * @param {object} handlerObj An object containing action handlers indexed by action type
 * @returns {object} Returns a new state if action.type matched with handlerObj indexes
 */
const reducerCreator = (initialState, handlerObj) =>
	(state = initialState, action) =>
		action.type in handlerObj ?
			handlerObj[action.type](state, action) :
			state

export default reducerCreator
