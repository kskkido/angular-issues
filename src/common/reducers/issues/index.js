import { combineReducers } from 'redux'
import pages, * as fromPages from './pages'
import items, * as fromItems from './items'
import navigation, * as fromNavigation from './navigation'

/* REDUCER */
const reducer = combineReducers({
	pages,
	items,
	navigation
})

export default reducer

/* GETTERS */
export const getIssuesByPage = (state, page) => fromPages.getItemsByPage(state.pages, page)
export const getIssueById = (state, id) => fromItems.getItemById(state.items, id)
export const getCurrentPage = state => fromNavigation.getCurrentPage(state.navigation)
export const getLastPage = state => fromNavigation.getLastPage(state.navigation)
