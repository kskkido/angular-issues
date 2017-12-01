import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'semantic-ui-react'
import { User } from '../Styles'
import Markdown from './Markdown'

const Article = ({ source, user }) => (
	<div>
		<User>
			<Icon name="user" />
			<a href={user.htmlUrl} target="blank">
				{user.login}
			</a>
		</User>
		<Markdown source={source} />
	</div>
)

Article.propTypes = {
	source: PropTypes.string.isRequired,
	user: PropTypes.objectOf(PropTypes.any).isRequired,
}

export default Article
