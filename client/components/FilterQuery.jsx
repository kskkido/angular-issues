import React from 'react'
import { Redirect } from 'react-router-dom'
import { identity } from 'ramda'
import PropTypes from 'prop-types'
import queryString from 'query-string'

const Query = ({
	children,
	redirect,
	filter,
	query
}) => {
	if (!query) {
		return <Redirect to={redirect} />
	}

	const parsed = queryString.parse(query)
	const filtered = filter(parsed)

	return filtered ?
		children({ param: filtered }) :
		<Redirect to={redirect} />
}

Query.propTypes = {
	children: PropTypes.func.isRequired,
	redirect: PropTypes.string.isRequired,
	query: PropTypes.string.isRequired,
	filter: PropTypes.func
}

Query.defaultProps = {
	filter: identity
}

export default Query
