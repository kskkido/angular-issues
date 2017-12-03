import React from 'react'
import PropTypes from 'prop-types'

/* helper used to render links in react markdown */
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
