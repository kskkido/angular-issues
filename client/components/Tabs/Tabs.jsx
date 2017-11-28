import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { identity } from 'ramda'
import TabList from './TabList'

class Tabs extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		handleClick: PropTypes.func
	}

	static defaultProps = {
		handleClick: identity
	}

	state = {
		activeIndex: 0
	}

	onChange = (nextIndex, cb = identity) => {
		const { handleClick } = this.props

		this.setState(
			() => ({ activeIndex: handleClick(nextIndex) }),
			cb
		)
	}

	renderChildren = () => {
		const { activeIndex } = this.state
		const { children } = this.props

		return React.Children.map(children, child =>
			React.cloneElement(child, {
				activeIndex,
				handleClick: child.type === TabList ? this.onChange : null,
			}))
	}

	render() {
		return this.renderChildren()
	}
}

export default Tabs
