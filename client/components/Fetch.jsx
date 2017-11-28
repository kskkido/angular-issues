import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Fetch extends Component {
	static propTypes = {
		children: PropTypes.func.isRequired,
		fetch: PropTypes.func.isRequired,
	}

	state = {
		error: '',
		payload: null,
	}

	componentWillMount() {
		const { fetch } = this.props

		fetch()
			.then(res => this.onSuccess(res))
			.catch(error => this.onError(error))
	}

	onSuccess = payload => this.setState(() => ({ payload }))

	onError = error => this.setState(() => ({ error }))

	render() {
		const { error, payload } = this.state

		return this.props.children({
			error,
			payload,
			loading: payload === null
		})
	}
}

export default Fetch
