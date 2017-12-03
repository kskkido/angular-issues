import React from 'react'
import PropTypes from 'prop-types'
import parse from 'Utils/parse'
import { requestPage } from 'Actions/api'
import { Redirect } from 'react-router-dom'
import View from './View'

const Issues = ({ location }) => {
	const page = parse(location.search, 'page')

	return page && page > 0 ?
		<View page={+page} /> :
		<Redirect to="/" />
}

Issues.propTypes = {
	location: PropTypes.objectOf(PropTypes.any).isRequired
}

Issues.initialAction = (url) => {
	const page = parse(url, 'page')

	return requestPage(page || '1')
}

export default Issues
