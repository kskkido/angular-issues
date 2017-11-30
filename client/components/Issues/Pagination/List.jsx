import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Tab, Tabs } from 'Components/Tabs'

const List = ({ current, labels }) => (
	<Tabs
		activeIndex={current}
		handleClick={() => console.log('clicked')}
	>
		{labels.map(label => (
			<Tab key={`${current}_${label}`}>
				<Link to={`/issues?page=${+label}`}>
					{label}
				</Link>
			</Tab>
		))}
	</Tabs>
)


List.propTypes = {
	current: PropTypes.number.isRequired,
	labels: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default List
