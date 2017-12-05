import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FetchStatus } from 'Components/FromRedux'
import LoaderComponent from './Loader'
import ErrorComponent from './Error'

/* uses endpoint to subscribe to fetch status */
/* checks redux state before rendering its chidlren */
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
			<FetchStatus endpoint={endpoint}>
				{({ error, fetching }) => {
					if (error) {
						return <RenderError error={error} onRetry={fetch} />
					}

					if (shouldFetch || fetching) {
						return <RenderLoad />
					}

					return children
				}}
			</FetchStatus>
		)
	}
}

export default Fetch
