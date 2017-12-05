import React from 'react'
import PropTypes from 'prop-types'
import Container from 'Components/View'
import Content from './Content'
import Navigation from './Navigation'

const View = ({ page }) => (
	<Container
		RenderContent={() => <Content page={page} />}
		RenderNavigation={() => <Navigation page={page} />}
	/>
)


View.propTypes = {
	page: PropTypes.number.isRequired
}

export default View
