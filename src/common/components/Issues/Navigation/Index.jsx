import React from 'react'
import PropTypes from 'prop-types'
import { LastPage } from 'Components/FromRedux'
import List from './List'

const Tabs = ({ page }) => (
	<LastPage>
		{({ lastPage }) => lastPage !== null && (
			<List
				currentPage={page}
				lastPage={lastPage}
			/>
		)}
	</LastPage>
)

Tabs.propTypes = {
	page: PropTypes.number.isRequired
}

export default Tabs
