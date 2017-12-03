import React from 'react'
import PropTypes from 'prop-types'
import { View as Container } from 'Styles/base'
import ContentView from 'Components/Content'
import NavigationView from 'Components/Navigation'
import Content from './Content'
import Navigation from './Navigation'

const View = ({ page }) => (
	<Container>
		<ContentView>
			<Content page={page} />
		</ContentView>
		<NavigationView>
			<Navigation page={page} />
		</NavigationView>
	</Container>
)


View.propTypes = {
	page: PropTypes.number.isRequired
}

export default View
