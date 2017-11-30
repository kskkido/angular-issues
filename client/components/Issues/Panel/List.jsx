import React from 'react'
import PropTypes from 'prop-types'

const List = ({ children }) => (
	<div>
		{children}
	</div>
)

List.propTypes = {
	children: PropTypes.node
}

List.defaultProps = {
	children: null
}

export default List
