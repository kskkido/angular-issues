import React from 'react'
import PropTypes from 'prop-types'

const TabPanels = ({ activeIndex, children, list }) => {
	const childrenArray = React.Children.toArray(children)
	const renderChildren = childrenArray.map((child, i) =>
		React.cloneElement(child, {
			data: list[i]
		}))

	return renderChildren[activeIndex]
}

TabPanels.propTypes = {
	activeIndex: PropTypes.number.isRequired,
	children: PropTypes.node.isRequired,
	list: PropTypes.arrayOf(PropTypes.any).isRequired
}

export default TabPanels
