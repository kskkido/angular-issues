import React from 'react'
import PropTypes from 'prop-types'

const Tab = ({
	active,
	disable,
	children,
	onClick
}) => (
	<div onClick={disable ? null : onClick}>
		{children}
	</div>
)

Tab.propTypes = {
	active: PropTypes.bool,
	disable: PropTypes.bool,
	children: PropTypes.node,
	onClick: PropTypes.func
}

Tab.defaultProps = {
	active: true,
	disable: false,
	children: null,
	onClick: () => {}
}

export default Tab
