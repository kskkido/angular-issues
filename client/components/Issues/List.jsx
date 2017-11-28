import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getItemById } from 'Reducers'
import WithRender from 'Components/WithRender'
import Preview from './Preview'

const mapStateToProps = (state, { id }) => ({
	issue: getItemById(state, id)
})

const IssueProvider = connect(mapStateToProps)(WithRender)

const List = ({ issues }) => (
	<div>
		{issues.map(issueId => (
			<IssueProvider id={issueId} key={`issues_${issueId}`}>
				{({ issue }) => <Preview issue={issue} />}
			</IssueProvider>
		))}
	</div>
)

List.propTypes = {
	issues: PropTypes.arrayOf(PropTypes.number).isRequired
}

export default List
