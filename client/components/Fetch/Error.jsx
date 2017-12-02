import React from 'React'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import { Button, Divider, Header } from 'semantic-ui-react'
import Overlay from './Overlay'

const ErrorMessage = ({ error, onRetry }) => (
	<Route render={({ history }) => (
		<Overlay>
			<Header as="h2">
				Oh no! Its an error!
				<br />
				{error}
			</Header>
			<Divider section />
			<Button onClick={() => onRetry()}>
				Retry that fetch
			</Button>
			<Divider hidden />
			<Button onClick={history.goBack}>
				Go back
			</Button>
		</Overlay>
	)}
	/>
)

ErrorMessage.propTypes = {
	error: PropTypes.string.isRequired,
	onRetry: PropTypes.func
}

ErrorMessage.defaultProps = {
	onRetry: null
}

export default ErrorMessage
