import { combineReducers } from 'redux'
import fetch, * as fromFetch from './fetch'
import issues, * as fromIssues from './issues'

/* ROOT REDUCER */
export default combineReducers({
	fetch,
	issues,
})

/* GETTERS */
export const getFetchError = (state, endpoint) => fromFetch.getError(state.fetch, endpoint)
export const getFetchStatus = (state, endpoint) => fromFetch.getStatus(state.fetch, endpoint)
export const getIssuesByPage = (state, page) => fromIssues.getIssuesByPage(state.issues, page)
export const getIssueByNumber = (state, id) => fromIssues.getIssueByNumber(state.issues, id)
export const getCurrentPage = state => fromIssues.getCurrentPage(state.issues)
export const getLastPage = state => fromIssues.getLastPage(state.issues)
