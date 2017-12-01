import React from 'react'
import PropTypes from 'prop-types'
import parse from 'Utils/parse'
import fetch from 'Utils/fetch'
import { endpointCreator } from 'Utils/endpoint'
import { itemListSchema } from 'Actions/issues'
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

Issues.initialRender = (url) => {
	const page = parse(url, 'page')
	const endpoint = endpointCreator(page)

	return fetch(endpoint, itemListSchema)
}

export default Issues
