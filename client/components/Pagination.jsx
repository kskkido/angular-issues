import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Pagination extends Component {
	static propTypes = {
		first: PropTypes.number,
		last: PropTypes.number.isRequired,
		page: PropTypes.number.isRequired
	}

	static defaultProps = {
		first: 1
	}

	state = {
		currentPage: this.props.page
	}

	// can be updated by route change
	componentWillReceiveProps(nextProps) {
		const { currentPage } = this.state

		if (nextProps.page !== currentPage) {
			this.onChange(nextProps.page)
		}
	}

	onChange = page => this.setState(() => ({ page }))

	onClick = page =

	render() {
		const { page } = this.state

		return <span>{page}</span>
	}
}
