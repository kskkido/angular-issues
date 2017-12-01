import React from 'react'
import PropTypes from 'prop-types'
import { issueEndpoint } from 'Utils/endpoint'
import { Redirect } from 'react-router-dom'
import { IssueById } from 'Components/FromRedux'
import View from './View'

const Issue = ({ match }) => {
	const { id } = match.params

	return (
		<IssueById id={id}>
			{({ issue }) =>
				issue ?
					<View issue={issue} /> :
					<Redirect to="/" />
			}
		</IssueById>
	)
}

Issue.propTypes = {
	match: PropTypes.objectOf(PropTypes.any).isRequired
}

Issue.initialRender = (url) => {

}

export default Issue
