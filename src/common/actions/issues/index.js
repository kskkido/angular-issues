import parse from 'Utils/parse'
import actionCreator from 'Actions/utils'

export const receivePage = actionCreator(
	'RECEIVE_PAGE',
	(response, endpoint) => {
		const page = parse(endpoint, 'page')

		return {
			page,
			response
		}
	}
)

export const receiveIssue = actionCreator(
	'RECEIVE_ISSUE',
	response => ({ response })
)
