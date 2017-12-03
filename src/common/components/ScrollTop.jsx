/* global TweenLite */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

/* custom scroll to the top of viewport on every udpate */
class ScrollTop extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		location: PropTypes.objectOf(PropTypes.any).isRequired
	}

	componentDidUpdate(nextProps) {
		if (this.props.location !== nextProps.location) {
			window.scrollTo(0, 0)
		}
	}

	render() {
		return this.props.children
	}
}

export default withRouter(ScrollTop)
