import { combineReducers } from 'redux'
import { compose, prop } from 'ramda'
import current, * as fromCurrent from './current'
import items, * as fromItems from './items'
import pages, * as fromPages from './pages'

/* REDUCER */
const reducer = combineReducers({
	current,
	items,
	pages
})

export default reducer

/* GETTER */
const getState = prop('pagination')

export const getCurrentPage = compose(fromCurrent.getCurrentPage, getState)
export const getItemById = (state, id) => fromItems.getItemById(getState(state), id)
export const getByPage = (state, page) => fromPages.getByPage(getState(state), page)
