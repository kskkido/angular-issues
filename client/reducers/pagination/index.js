import { combineReducers } from 'redux'
import current, * as fromCurrent from './current'
import items, * as fromItems from './items'
import pages, * as fromPages from './pages'

/* ACTION CREATORS */
export const { receiveItems } = fromItems
export const { changePage } = fromCurrent

/* REDUCER */
const reducer = combineReducers({
	current,
	items,
	pages
})

export default reducer

/* GETTER */
export const getItemById = (state, id) => fromItems.getItemById(state.items, id)
export const getPage = (state, page) => fromPages.getPage(state.pages, page)
export const getCurrentPage = state => getPage(state, fromCurrent.getCurrentPageNumber())
