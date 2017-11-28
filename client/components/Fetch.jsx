import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import WithRender from './WithRender'
import Error from './Error'

const mapStateToProps = ({ fetch }) => ({ ...fetch })

const StatusProvider = connect(mapStateToProps)(WithRender)

class Fetch extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		fetch: PropTypes.func.isRequired,
		shouldFetch: PropTypes.bool.isRequired,
	}

	componentWillMount() {
		const { shouldFetch, fetch } = this.props

		if (shouldFetch) {
			fetch()
		}
	}

	render() {
		const {
			children,
			fetch,
			shouldFetch,
		} = this.props

		return (
			<StatusProvider>
				{({ error, fetching }) => {
					if (error) {
						return <Error error={error} onRetry={fetch} />
					}

					if (shouldFetch || fetching) {
						return <span>loading</span>
					}

					return children
				}}
			</StatusProvider>
		)
	}
}

export default Fetch
