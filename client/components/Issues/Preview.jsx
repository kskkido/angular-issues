import React from 'react'
import PropTypes from 'prop-types'

const Preview = ({ issue }) => (
	<div>
		<span>{issue.number}</span>
		<span>{issue.title}</span>
	</div>
)

Preview.propTypes = {
	issue: PropTypes.objectOf(PropTypes.any).isRequired
}

export default Preview
