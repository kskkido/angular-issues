import React from 'react'
import PropTypes from 'prop-types'
import { View as Container } from 'Styles/base'
import ContentView from 'Components/Content'
import NavigationView from 'Components/Navigation'
import Content from './Content'
import Navigation from './Navigation'

const View = ({ issue }) => {

	return (
		<Container>
			<ContentView>
				<Content issue={issue} />
			</ContentView>
			<NavigationView>
				<Navigation />
			</NavigationView>
		</Container>
	)
}


View.propTypes = {
	issue: PropTypes.objectOf(PropTypes.any).isRequired
}

export default View
