import React from 'react'
import PropTypes from 'prop-types'

const Url = ({ value }) => (
	<a
		href={value}
		target="blank"
	>
		{value}
	</a>
)

Url.propTypes = {
	value: PropTypes.string.isRequired
}

export default Url
