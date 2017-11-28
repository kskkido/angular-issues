import React from 'React'
import PropTypes from 'prop-types'

const Error = ({ error, onRetry }) => <span>{error}</span>

Error.propTypes = {
	error: PropTypes.string.isRequired
}

export default Error
