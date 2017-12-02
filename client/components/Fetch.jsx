import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FetchStatus, DispatchError, merge } from './FromRedux'
import LoaderComponent from './Loader'
import ErrorComponent from './Error'

const FetchStatusWithError = merge(FetchStatus, DispatchError)

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
		RenderLoad: LoaderComponent
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
			<FetchStatusWithError endpoint={endpoint}>
				{({ error, fetching, dispatchError }) => {
					if (error) {
						return <RenderError error={error} onRetry={fetch} />
					}

					if (shouldFetch || fetching) {
						const onTimeout = () => dispatchError('Api call timed out!')

						return <RenderLoad timeout={8000} onTimeout={onTimeout} />
					}

					return children
				}}
			</FetchStatusWithError>
		)
	}
}

export default Fetch
