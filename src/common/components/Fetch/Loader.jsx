import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Loader } from 'semantic-ui-react'
import Overlay from './Overlay'

class Load extends Component {
	static propTypes = {
		timeout: PropTypes.number.isRequired,
		onTimeout: PropTypes.func.isRequired,
	}

	componentDidMount() {
		const { onTimeout, timeout } = this.props

		this.timeout = setTimeout(onTimeout, timeout)
	}

	componentWillUnmount() {
		clearTimeout(this.timeout)
	}

	render() {
		return (
			<Overlay>
				<Loader>Loading</Loader>
			</Overlay>
		)
	}
}

export default Load
