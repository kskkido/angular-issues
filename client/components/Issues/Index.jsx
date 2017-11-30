import React from 'react'
import PropTypes from 'prop-types'
import Pagination from './Pagination'
import Panel from './Panel'

const Issues = ({ page }) => (
	<div>
		<Panel page={page} />
		<Pagination page={page} />
	</div>
)

Issues.propTypes = {
	page: PropTypes.number.isRequired
}

export default Issues
