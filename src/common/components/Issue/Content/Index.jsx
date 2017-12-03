import React from 'react'
import PropTypes from 'prop-types'
import { Container, Divider } from 'semantic-ui-react'
import Article from './Article'
import Title from './Title'

const Content = ({ issue }) => {
	const {
		body,
		htmlUrl,
		number,
		updatedAt,
		user,
		title,
	} = issue

	return (
		<Container
			text
		>
			<Divider hidden />
			<Title
				number={number}
				updatedAt={updatedAt}
				url={htmlUrl}
				title={title}
			/>
			<Divider />
			<Article
				source={body}
				user={user}
			/>
			<Divider />
		</Container>
	)
}

Content.propTypes = {
	issue: PropTypes.objectOf(PropTypes.any).isRequired
}

export default Content
