import { schema } from 'normalizr'
import actionCreator from 'Actions/utils'
import { pageEndpoint } from 'Utils/endpoint'

const itemSchema = new schema.Entity('items')
export const itemListSchema = [itemSchema]

export const requestApi = actionCreator(
	'REQUEST_API',
	(page) => {
		/* creates github endpoint */
		const endpoint = pageEndpoint(page)

		return {
			page,
			endpoint,
			schema: itemListSchema,
		}
	}
)

export const receivePage = actionCreator(
	'RECEIVE_PAGE',
	(page, response) => ({
		page,
		response
	})
)
