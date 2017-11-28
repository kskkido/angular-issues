import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fetchPage from 'Utils/fetchApi'
import Fetch from './Fetch'
import Issue from './Issue'

/* Receives page number and makes a fetch request to github api */

const Issues = ({ page }) => {
	console.log('ISSUES')

	return (
		<Fetch fetch={() => fetchPage(page)}>
			{({ error, loading, payload }) => {
				if (error) { return <span>{error}</span> }
				if (loading) { return <span>{loading}</span> }

				return <Issue />
			}}
		</Fetch>
	)
}

Issues.propTypes = {
	page: PropTypes.number.isRequired
}

export default Issues
