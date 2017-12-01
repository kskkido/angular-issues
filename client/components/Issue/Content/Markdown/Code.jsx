import React from 'react'
import PropTypes from 'prop-types'
import { Pre } from '../../Styles'

const Code = ({ value }) => (
	<Pre>
		<code>
			{value}
		</code>
	</Pre>
)


Code.propTypes = {
	value: PropTypes.string.isRequired
}

export default Code
