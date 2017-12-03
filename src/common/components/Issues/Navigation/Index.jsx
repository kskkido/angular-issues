import React from 'react'
import PropTypes from 'prop-types'
import { LastPage } from 'Components/FromRedux'
import List from './List'

const Navigation = ({ page }) => (
	<LastPage>
		{({ lastPage }) => (
			<List
				currentPage={page}
				lastPage={lastPage || 1}
			/>
		)}
	</LastPage>
)

Navigation.propTypes = {
	page: PropTypes.number.isRequired
}

export default Navigation
