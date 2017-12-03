import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'semantic-ui-react'
import { Navigation as Container } from 'Styles/base'

/* used as navigation view component */
const Navigation = ({ children }) => (
	<Container>
		<Menu>
			{children}
		</Menu>
	</Container>
)

Navigation.propTypes = {
	children: PropTypes.node.isRequired
}

export default Navigation
