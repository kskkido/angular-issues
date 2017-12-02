import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'semantic-ui-react'
import { Navigation as Container } from 'Styles/base'
import { CurrentPage } from 'Components/FromRedux'
import Link from 'Components/Link'

const localEndpoint = id => `/issue/${id}`

const Navigation = ({ previous, next }) => (
	<Container>
		<Menu compact>
			<Link
				disabled={previous === null}
				to={localEndpoint(previous)}
			>
				Previous Issue
			</Link>
			<CurrentPage>
				{({ currentPage }) => (
					<Link to={`/issues?page=${currentPage}`}>
						Back to list
					</Link>
				)}
			</CurrentPage>
			<Link
				disabled={next === null}
				to={localEndpoint(next)}
			>
				Next Issue
			</Link>
		</Menu>
	</Container>
)


Navigation.propTypes = {
	previous: PropTypes.number,
	next: PropTypes.number
}

Navigation.defaultProps = {
	previous: null,
	next: null
}

export default Navigation
