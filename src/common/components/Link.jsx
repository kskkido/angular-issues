import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const SemanticLink = ({
	children,
	active,
	disabled,
	to,
	RenderLink
}) => !disabled ?
	<Link
		to={to}
	>
		{children}
	</Link> :
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
