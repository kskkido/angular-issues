import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import queryString from 'query-string'

const Query = ({ location }) => {
	const parsed = queryString(location.search)

	return <span>{parsed}</span>
}

Query.propTypes = {
	location: PropTypes.objectOf(PropTypes.object).isRequired
}

export default Query
