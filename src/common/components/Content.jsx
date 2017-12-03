import React from 'react'
import PropTypes from 'prop-types'
import { Segment } from 'semantic-ui-react'
import { Content as Container } from 'Styles/base'

const Content = ({ children }) => (
	<Segment
		as={Container}
		raised
	>
		{children}
	</Segment>
)

Content.propTypes = {
	children: PropTypes.node.isRequired
}

export default Content
