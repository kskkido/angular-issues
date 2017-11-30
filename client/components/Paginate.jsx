import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Paginate extends Component {
	static propTypes = {
		children: PropTypes.func.isRequired,
		current: PropTypes.number.isRequired,
		last: PropTypes.number.isRequired,
	}

	static getRange = (current, last) => {
		let startPage
		let endPage

		/* github Paginate logic */
		if (last <= 8) {
			startPage = 1
			endPage = last
		} else if (current <= 6) {
			startPage = 1
			endPage = 8
		} else if (current + 5 >= last) {
			startPage = last - 7
			endPage = last
		} else {
			startPage = current - 2
			endPage = current + 2
		}

		return {
			startPage,
			endPage,
			length: 1 + (endPage - startPage)
		}
	}

	static getLabels = (current, last) => {
		const { startPage, endPage, length } = Paginate.getRange(current, last)
		let labels = []

		if (startPage !== 1) {
			labels = labels.concat('1', '2', null)
		}

		for (let i = 0; i < length; i += 1) {
			labels.push(`${startPage + i}`)
		}

		if (endPage !== last) {
			labels = labels.concat(null, `${last - 1}`, `${last}`)
		}

		return labels
	}

	constructor(props) {
		super(props)

		const { current, last } = this.props

		this.state = {
			labels: Paginate.getLabels(current, last)
		}
	}

	// can be updated by route change
	componentWillReceiveProps({ current, last }) {
		if (current !== this.state.current) {
			const nextState = Paginate.getLabels(current, last)

			this.onChange(nextState)
		}
	}

	onChange = labels => this.setState(() => ({ labels }))

	render() {
		const { children } = this.props
		const { labels } = this.state

		return children({
			labels
		})
	}
}

export default Paginate
