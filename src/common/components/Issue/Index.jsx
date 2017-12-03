import React from 'react'
import PropTypes from 'prop-types'
import { requestIssue } from 'Actions/api'
import { Redirect } from 'react-router-dom'
import { IssueByNumber } from 'Components/FromRedux'
import View from './View'

/* single issue component */
const Issue = ({ match }) => {
	const { number } = match.params

	return (
		<IssueByNumber number={number}>
			{({ issue }) =>
				issue ?
					<View issue={issue} /> :
					<Redirect to="/" />
			}
		</IssueByNumber>
	)
}

Issue.propTypes = {
	match: PropTypes.objectOf(PropTypes.any).isRequired
}

Issue.initialAction = (url) => {
	const index = url.search(/\/\d+/)
	const issueNumber = url.slice(index + 1)

	return requestIssue(issueNumber || '')
}

export default Issue
