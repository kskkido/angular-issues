import React from 'react'
import PropTypes from 'prop-types'
import { View as Container } from 'Styles/base'
import Navigation from './Navigation'
import Content from './Content'

const View = ({ page }) => (
	<Container>
		<Content page={page} />
		<Navigation page={page} />
	</Container>
)


View.propTypes = {
	page: PropTypes.number.isRequired
}

export default View
