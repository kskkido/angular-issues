import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPage } from 'Reducers'
import { fetchIssues } from 'Reducers/dispatch'
import WithRender from 'Components/WithRender'
import Fetch from 'Components/Fetch'
import List from './List'

const mapStateToProps = (state, { page }) => ({
	issues: getPage(state, page)
})

const mapDispatchToProps = (dispatch, { page }) => ({
	fetch: () => dispatch(fetchIssues(page))
})

const ProvideIssues = connect(
	mapStateToProps,
	mapDispatchToProps
)(WithRender)

const Issues = ({ page }) => (
	<ProvideIssues page={page}>
		{({ issues, fetch }) => (
			<Fetch
				fetch={fetch}
				shouldFetch={issues === undefined}
			>
				<List issues={issues || []} />
			</Fetch>
		)}
	</ProvideIssues>
)

Issues.propTypes = {
	page: PropTypes.number.isRequired
}

export default Issues
