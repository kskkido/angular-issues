import React from 'react'
import PropTypes from 'prop-types'

const Tab = ({ active, label, onClick }) => (
	<span onClick={e => onClick()}>
		{label}
	</span>
)

export default Tab
