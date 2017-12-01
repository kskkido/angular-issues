import React from 'react'
import PropTypes from 'prop-types'
import { Dimmer, Segment } from 'semantic-ui-react'

const Overlay = ({ children }) => (
	<Dimmer active inverted>
		{children}
	</Dimmer>
)

Overlay.propTypes = {
	children: PropTypes.node.isRequired
}

export default Overlay
