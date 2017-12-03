import actionCreator from 'Actions/utils'

const apiActionCreator = handlerFn => actionCreator(
	'REQUEST_API',
	handlerFn
)

export default apiActionCreator
