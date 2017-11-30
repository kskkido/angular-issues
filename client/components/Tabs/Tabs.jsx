import React from 'react'
import PropTypes from 'prop-types'

const Tabs = ({ activeIndex, children, handleClick }) => {
	const renderChildren = React.Children.map(children, (child, i) => {
		if (child === null) {
			return null
		}

		const active = activeIndex === i

		return React.cloneElement(child, {
			active,
			onClick: handleClick ? () => handleClick(i) : null
		})
	})

	return renderChildren
}

Tabs.propTypes = {
	activeIndex: PropTypes.number.isRequired,
	children: PropTypes.node.isRequired,
	handleClick: PropTypes.func
}

Tabs.defaultTyeps = {
	handleClick: null
}

export default Tabs
