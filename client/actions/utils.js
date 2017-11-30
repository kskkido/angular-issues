const actionCreator = (type, handlerFn) =>
	Object.assign(
		(...payload) => ({
			type,
			payload: handlerFn ? handlerFn(...payload) : null
		}),
		{ type }
	)

export default actionCreator
