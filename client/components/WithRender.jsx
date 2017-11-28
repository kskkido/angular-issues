import React from 'react'
import PropTypes from 'prop-types'

/* converts HOCs into render props stream */
const WithRender = ({ children, ...rest }) => children({ ...rest })

WithRender.propTypes = {
	children: PropTypes.func.isRequired
}

export default WithRender
