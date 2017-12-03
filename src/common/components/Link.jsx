import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

/* custom link used in navigation components */
const SemanticLink = ({
	children,
	active,
	disabled,
	to,
	RenderLink
}) => !disabled ?
	<RenderLink
		active={active}
		as={Link}
		to={to}
	>
		{children}
	</RenderLink> :
	<RenderLink disabled>
		{children}
	</RenderLink>


SemanticLink.propTypes = {
	children: PropTypes.node,
	active: PropTypes.bool,
	disabled: PropTypes.bool,
	to: PropTypes.string,
	RenderLink: PropTypes.func
}

SemanticLink.defaultProps = {
	children: null,
	active: false,
	disabled: false,
	to: null,
	RenderLink: Menu.Item
}


export default SemanticLink
