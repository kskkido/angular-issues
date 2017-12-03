import React from 'react'
import PropTypes from 'prop-types'
import { Header, Segment } from 'semantic-ui-react'
import Fetch from 'Components/Fetch'
import Item from './Item'

const List = ({ endpoint, fetch, numbers }) => {
	const items = numbers.map(number => (
		<Segment key={number} attached>
			<Item number={number} />
		</Segment>
	))

	return [
		<Header as="h3" attached="top">
			Whats wrong with Angular
		</Header>,
		<Fetch
			endpoint={endpoint}
			fetch={fetch}
			shouldFetch={numbers.length === 0}
		>
			{items}
		</Fetch>
	]
}

List.propTypes = {
	endpoint: PropTypes.string.isRequired,
	fetch: PropTypes.func.isRequired,
	numbers: PropTypes.arrayOf(PropTypes.number)
}

List.defaultProps = {
	numbers: []
}

export default List
