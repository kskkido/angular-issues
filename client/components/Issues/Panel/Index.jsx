import React from 'react'
import PropTypes from 'prop-types'
import { getIssuesByPage } from 'Reducers'
import { requestApi } from 'Actions/issues'
import endpointCreator from 'Utils/endpoint'
import WithRedux from 'Components/WithRedux'
import Fetch from 'Components/Fetch'
import List from './List'
import Item from './Item'

const mapStateToProps = (state, { page }) => ({
	issues: getIssuesByPage(state, page)
})

const mapDispatchToProps = (dispatch, { page }) => ({
	fetch: () => dispatch(requestApi(page))
})

const IssuesProvider = WithRedux(mapStateToProps, mapDispatchToProps)

const Body = ({ page }) => {
	const endpoint = endpointCreator(page)

	return (
		<IssuesProvider page={page}>
			{({ issues, fetch }) => (
				<Fetch
					endpoint={endpoint}
					fetch={fetch}
					shouldFetch={issues === undefined}
				>
					<List>
						{issues && issues.map(id => (
							<Item
								id={id}
								key={`${page}_${id}`}
							/>))
						}
					</List>
				</Fetch>
			)}
		</IssuesProvider>
	)
}

Body.propTypes = {
	page: PropTypes.number.isRequired
}

export default Body
