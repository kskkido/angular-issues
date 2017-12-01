import React from 'react'
import PropTypes from 'prop-types'
import {
	Container,
	Divider,
	Header,
	Segment
} from 'semantic-ui-react'
import { Content as _Container } from 'Styles/base'
import Article from './Article'
import Title from './Title'

const Content = ({ issue }) => {
	const {
		body,
		number,
		updatedAt,
		url,
		user,
		title,
	} = issue

	return (
		<Segment raised>
			<Container
				as={_Container}
				text
			>
				<Title
					number={number}
					updatedAt={updatedAt}
					url={url}
					title={title}
				/>
				<Divider />
				<Article
					source={body}
					user={user}
				/>
				<Divider />
			</Container>
		</Segment>
	)
}

Content.propTypes = {
	issue: PropTypes.objectOf(PropTypes.any).isRequired
}

export default Content
