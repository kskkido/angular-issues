import React from 'react'
import PropTypes from 'prop-types'

const TabList = ({ activeIndex, children, handleClick }) => {
	const renderChildren = React.Children.map(children, (child, i) => {
		const active = activeIndex === i

		React.cloneElement(child, {
			active,
			onClick: () => handleClick(i)
		})
	})

	return renderChildren()
}

TabList.propTyeps = {
	activeIndex: PropTypes.number.isRequired,
	children: PropTypes.node.isRequired,
	handleClick: PropTypes.func.isRequired
}

export default TabList
