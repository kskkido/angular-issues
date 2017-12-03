import { schema } from 'normalizr'
import { getIssuesByPage, getIssueByNumber } from 'Reducers'
import { issueEndpoint, pageEndpoint } from 'Utils/endpoint'
import { receivePage, receiveIssue } from 'Actions/issues'
import apiActionCreator from './utils'

const itemSchema = new schema.Entity('items', {}, { idAttribute: 'number' })
const itemListSchema = [itemSchema]

export const requestPage = apiActionCreator((page) => {
	const endpoint = pageEndpoint(page)

	return {
		endpoint,
		onSuccess: receivePage,
		schema: itemListSchema,
		cache: state => getIssuesByPage(state, page),
	}
})

export const requestIssue = apiActionCreator((issueId) => {
	const endpoint = issueEndpoint(issueId)

	return {
		endpoint,
		onSuccess: receiveIssue,
		schema: itemSchema,
		cache: state => getIssueByNumber(state, issueId)
	}
})
