import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getFetchError, getFetchStatus } from 'Reducers'
import WithRedux from './WithRedux'
import LoadComponent from './Load'
import ErrorComponent from './Error'

const mapStateToProps = (state, { endpoint }) => ({
	error: getFetchError(state, endpoint),
	fetching: getFetchStatus(state, endpoint)
})

const StatusProvider = WithRedux(mapStateToProps)

/* uses endpoint to subscribe to fetch status */
class Fetch extends Component {
	static propTypes = {
		children: PropTypes.node.isRequired,
		endpoint: PropTypes.string.isRequired,
		fetch: PropTypes.func.isRequired,
		shouldFetch: PropTypes.bool.isRequired,
		RenderError: PropTypes.func,
		RenderLoad: PropTypes.func
	}

	static defaultProps = {
		RenderError: ErrorComponent,
		RenderLoad: LoadComponent
	}

	componentWillMount() {
		const { shouldFetch, fetch } = this.props

		if (shouldFetch) {
			fetch()
		}
	}

	componentWillReceiveProps({ endpoint, fetch, shouldFetch }) {
		if (shouldFetch && endpoint !== this.props.endpoint) {
			fetch()
		}
	}

	render() {
		const {
			children,
			endpoint,
			fetch,
			shouldFetch,
			RenderError,
			RenderLoad
		} = this.props

		return (
			<StatusProvider endpoint={endpoint}>
				{({ error, fetching }) => {
					if (error) {
						return <RenderError error={error} onRetry={fetch} />
					}

					if (shouldFetch || fetching) {
						return <RenderLoad />
					}

					return children
				}}
			</StatusProvider>
		)
	}
}

export default Fetch
