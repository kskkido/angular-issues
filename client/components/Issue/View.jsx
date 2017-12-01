import React from 'react'
import PropTypes from 'prop-types'
import { View as Container } from 'Styles/base'
import Navigation from './Navigation'
import Content from './Content'

const View = ({ issue }) => {
	console.log(issue, 'why')

	return (
		<Container>
			<Content issue={issue} />
			<Navigation
				previous={issue.previousIssue}
				next={issue.nextIssue}
			/>
		</Container>
	)
}


View.propTypes = {
	issue: PropTypes.objectOf(PropTypes.any).isRequired
}

export default View
