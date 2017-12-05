import React from 'react'
import PropTypes from 'prop-types'
import { View as Container } from 'Styles/base'
import Content from 'Components/Content'
import Navigation from 'Components/Navigation'

const View = ({ RenderContent, RenderNavigation }) => (
	<Container>
		<Content>
			<RenderContent />
		</Content>
		<Navigation>
			<RenderNavigation />
		</Navigation>
	</Container>
)


View.propTypes = {
	RenderContent: PropTypes.func.isRequired,
	RenderNavigation: PropTypes.func.isRequired
}

export default View
