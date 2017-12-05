import React from 'react'
import PropTypes from 'prop-types'
import Container from 'Components/View'
import Content from './Content'
import Navigation from './Navigation'

const View = ({ issue }) => (
	<Container
		RenderContent={() => <Content issue={issue} />}
		RenderNavigation={() => <Navigation />}
	/>
)

View.propTypes = {
	issue: PropTypes.objectOf(PropTypes.any).isRequired
}

export default View
