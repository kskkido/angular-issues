import React from 'react'
import PropTypes from 'prop-types'
import { Navigation as Container } from 'Styles/base'
import { LastPage } from 'Components/FromRedux'
import List from './List'

const Tabs = ({ page }) => (
	<Container>
		<LastPage>
			{({ lastPage }) => lastPage !== null && (
				<List
					currentPage={page}
					lastPage={lastPage}
				/>
			)}
		</LastPage>
	</Container>
)

Tabs.propTypes = {
	page: PropTypes.number.isRequired
}

export default Tabs
