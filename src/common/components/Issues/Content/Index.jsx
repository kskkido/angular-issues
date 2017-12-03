import React from 'react'
import PropTypes from 'prop-types'
import { pageEndpoint } from 'Utils/endpoint'
import { IssuesByPage, DispatchRequest, merge } from 'Components/FromRedux'
import List from './List'

const IssuesByPageWithRequest = merge(IssuesByPage, DispatchRequest)

const Content = ({ page }) => {
	const endpoint = pageEndpoint(page)

	return (
		<IssuesByPageWithRequest page={page}>
			{({ issueNumbers, dispatchRequest }) => (
				<List
					endpoint={endpoint}
					fetch={dispatchRequest}
					numbers={issueNumbers}
				/>
			)}
		</IssuesByPageWithRequest>
	)
}

Content.propTypes = {
	page: PropTypes.number.isRequired
}

export default Content
