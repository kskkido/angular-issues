import React from 'react'
import PropTypes from 'prop-types'
import { LastPage } from 'Components/FromRedux'
import List from './List'

/* redirects to root if query does not contain page property */
const Navigation = ({ page }) => (
	<LastPage>
		{({ lastPage }) => lastPage !== null && (
			<List
				currentPage={page}
				lastPage={lastPage}
			/>
		)}
	</LastPage>
)

Navigation.propTypes = {
	page: PropTypes.number.isRequired
}

export default Navigation
