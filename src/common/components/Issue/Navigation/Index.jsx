import React from 'react'
import { CurrentPage } from 'Components/FromRedux'
import Link from 'Components/Link'

const Navigation = () => (
	<CurrentPage>
		{({ currentPage }) => (
			<Link to={`/issues?page=${currentPage}`}>
				Back to list
			</Link>
		)}
	</CurrentPage>
)

export default Navigation
