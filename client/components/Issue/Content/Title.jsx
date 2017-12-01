import React from 'react'
import PropTypes from 'prop-types'
import { Header } from 'semantic-ui-react'

const Content = ({
	number,
	updatedAt,
	url,
	title
}) => (
	<div>
		<Header as="h2">
			Issue: #{number}<br />
			{title}
		</Header>
		<Header sub>
			Last Updated: {updatedAt}
		</Header>
		<a href={url} target="blank">
				Check it out on Github
		</a>
	</div>
)

Content.propTypes = {
	number: PropTypes.number.isRequired,
	updatedAt: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired
}

export default Content
