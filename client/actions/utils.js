/**
 * Action factory
 * @param {string} type Action type, used to match action handlers in reducers
 * @param {function|undefined} handlerFn If provided, uses params to create new object
 * @returns {object} Returns a new action object
 */
const actionCreator = (type, handlerFn) =>
	Object.assign(
		(...payload) => ({
			type,
			payload: handlerFn ? handlerFn(...payload) : null
		}),
		{ type }
	)

export default actionCreator
