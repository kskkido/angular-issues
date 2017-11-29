import { combineReducers } from 'redux'

import fetch from './fetch'
import issues from './issues'
import pagination, * as fromPagination from './pagination'

export default combineReducers({
	fetch,
	pagination,
	issues: issues.reducer,
})

// getters
export const getCurrentPage = state => fromPagination.getCurrentPage(state.pagination)
export const getItemById = (state, id) => fromPagination.getItemById(state.pagination, id)
export const getPage = (state, page) => fromPagination.getPage(state.pagination, page)
