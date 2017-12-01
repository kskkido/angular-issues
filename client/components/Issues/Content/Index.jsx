import React from 'react'
import PropTypes from 'prop-types'
import { pageEndpoint } from 'Utils/endpoint'
import { IssuesByPage, DispatchRequest, merge } from 'Components/FromRedux'
import List from './List'

const IssuesByPageWithRequest = merge(IssuesByPage, DispatchRequest)

const Body = ({ page }) => {
	const endpoint = pageEndpoint(page)

	return (
		<IssuesByPageWithRequest page={page}>
			{({ issueIds, dispatchRequest }) => (
				<List
					endpoint={endpoint}
					fetch={dispatchRequest}
					ids={issueIds}
				/>
			)}
		</IssuesByPageWithRequest>
	)
}

Body.propTypes = {
	page: PropTypes.number.isRequired
}

export default Body
