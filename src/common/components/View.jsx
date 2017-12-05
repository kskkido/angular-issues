import React from 'react'
import PropTypes from 'prop-types'
import { View as Container } from 'Styles/base'
import ContentView from 'Components/Content'
import NavigationView from 'Components/Navigation'

const View = ({ RenderContent, RenderNavigation }) => (
	<Container>
		<ContentView>
			<RenderContent />
		</ContentView>
		<NavigationView>
			<RenderNavigation />
		</NavigationView>
	</Container>
)


View.propTypes = {
	RenderContent: PropTypes.func.isRequired,
	RenderNavigation: PropTypes.func.isRequired
}

export default View
