import React from 'react'
import PropTypes from 'prop-types'
import {
	getFetchError,
	getFetchStatus,
	getIssueById,
	getIssuesByPage,
	getCurrentPage,
	getLastPage

} from 'Reducers'
import { failureFetch } from 'Actions/fetch'
import { requestApi } from 'Actions/issues'
import withRedux from './utils'

/* MAP STATE TO PROPS */
const stateFetch = (state, { endpoint }) => ({
	error: getFetchError(state, endpoint),
	fetching: getFetchStatus(state, endpoint)
})
const stateIssue = (state, { id }) => ({
	issue: getIssueById(state, id)
})
const stateIssues = (state, { page }) => ({
	issueIds: getIssuesByPage(state, page)
})
const stateCurrentPage = state => ({
	currentPage: getCurrentPage(state)
})
const stateLastPage = state => ({
	lastPage: getLastPage(state)
})

/* MAP DISPATCH TO PROPS */
const dispatchFetchError = (dispatch, { endpoint }) => ({
	dispatchError: error => dispatch(failureFetch(error, endpoint))
})
const dispatchRequestApi = (dispatch, { page }) => ({
	dispatchRequest: () => dispatch(requestApi(page))
})

/* FROM REDUX STATE */
export const FetchStatus = withRedux(stateFetch)
export const IssueById = withRedux(stateIssue)
export const IssuesByPage = withRedux(stateIssues)
export const CurrentPage = withRedux(stateCurrentPage)
export const LastPage = withRedux(stateLastPage)

/* FROM REDUX DISPATCH */
export const DispatchError = withRedux(null, dispatchFetchError)
export const DispatchRequest = withRedux(null, dispatchRequestApi)

/* HELPER */
/**
 * Merges two render prop components together
 * Use to combine mapStateToProps render props and mapDispatchToProps render props
 * Runs with the assumption that both children receive the same props
 * @param {function} TargetComponent Render props component
 * @param {function} Component Render props component
 * @returns {function} Render props component that provides passed value from both components
 */
export const merge = (TargetComponent, Component) => {
	const Merged = ({ children, ...props }) => (
		<TargetComponent {...props}>
			{_props => (
				<Component {...props}>
					{__props => children(Object.assign({}, _props, __props))}
				</Component>
			)}
		</TargetComponent>
	)

	Merged.propTypes = {
		children: PropTypes.func.isRequired
	}

	return Merged
}
