import { combineReducers } from 'redux'
import pages, * as fromPages from './pages'
import items, * as fromItems from './items'
import navigation, * as fromNavigation from './navigation'

/**
* Pages: an object which stores a list of items by page number
* Items: an object which stores item details by item id
* Navigation:
*/

/* REDUCER */
const reducer = combineReducers({
	pages,
	items,
	navigation
})

export default reducer

/* GETTERS */
export const getIssuesByPage = (state, page) => fromPages.getItemsByPage(state.pages, page)
export const getIssueByNumber = (state, number) => fromItems.getItemById(state.items, number)
export const getCurrentPage = state => fromNavigation.getCurrentPage(state.navigation)
export const getLastPage = state => fromNavigation.getLastPage(state.navigation)
