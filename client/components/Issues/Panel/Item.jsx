import React from 'react'
import PropTypes from 'prop-types'
import { getIssueById } from 'Reducers'
import WithRedux from 'Components/WithRedux'

const mapStateToProps = (state, { id }) => ({
	issue: getIssueById(state, id)
})

const IssueProvider = WithRedux(mapStateToProps)

const Item = ({ id }) => (
	<IssueProvider id={id}>
		{({ issue }) => (
			<div>
				<span>{issue.number}</span>
				<span>{issue.title}</span>
			</div>
		)}
	</IssueProvider>
)

Item.propTypes = {
	id: PropTypes.number.isRequired
}

export default Item
