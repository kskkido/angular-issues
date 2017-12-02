import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import Url from './Url'
import Code from './Code'

const Markdown = ({ source }) => (
	<ReactMarkdown
		source={source}
		renderers={{
			code: Code,
			image: Url,
		}}
	/>
)

Markdown.propTypes = {
	source: PropTypes.string.isRequired
}

export default Markdown
