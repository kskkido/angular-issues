import React from 'react'
import PropTypes from 'prop-types'
import { getLastPage } from 'Reducers'
import WithRedux from 'Components/WithRedux'
import Paginate from 'Components/Paginate'
import List from './List'

const LastPageProvider = WithRedux(state => ({
	last: getLastPage(state)
}))

const Tabs = ({ page }) => (
	<LastPageProvider>
		{({ last }) => last !== null && (
			<Paginate
				current={page}
				last={last}
			>
				{({ labels }) => (
					<List
						current={page}
						labels={labels}
					/>
				)}
			</Paginate>
		)}
	</LastPageProvider>
)

Tabs.propTypes = {
	page: PropTypes.number.isRequired
}

export default Tabs
