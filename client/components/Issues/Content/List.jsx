import React from 'react'
import PropTypes from 'prop-types'
import { Header, Segment } from 'semantic-ui-react'
import { Content as Container } from 'Styles/base'
import Fetch from 'Components/Fetch'
import Item from './Item'

const List = ({ endpoint, fetch, ids }) => {
	const items = ids.map(id => (
		<Segment key={id} attached>
			<Item id={id} />
		</Segment>
	))

	return (
		<Segment.Group
			as={Container}
			raised
		>
			<Header as="h3" attached="top">
				Whats wrong with Angular
			</Header>
			<Fetch
				endpoint={endpoint}
				fetch={fetch}
				shouldFetch={ids.length === 0}
			>
				{items}
			</Fetch>
		</Segment.Group>
	)
}

List.propTypes = {
	endpoint: PropTypes.string.isRequired,
	fetch: PropTypes.func.isRequired,
	ids: PropTypes.arrayOf(PropTypes.number)
}

List.defaultProps = {
	ids: []
}

export default List
