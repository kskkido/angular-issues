import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as fromFetch from 'Reducers/fetch'
import WithRender from './WithRender'

/* blocks children if store is fetching */
const ProvideFetchStatus = connect(state => ({
	isFetching: fromFetch.getStatus(state)
}))(WithRender)

const Loader = ({ children }) => (
	<ProvideFetchStatus>
		{({ isFetching }) =>
			isFetching ?
				<span>loading</span> :
				children
		}
	</ProvideFetchStatus>
)

Loader.propTypes = {
	children: PropTypes.node.isRequired
}

export default Loader
