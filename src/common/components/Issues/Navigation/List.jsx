/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'
import paginate from 'Utils/paginate'
import { Icon } from 'semantic-ui-react'
import Link from 'Components/Link'

const localEndpoint = page => `/issues?page=${page}`

const List = ({ currentPage, lastPage }) => {
	const labels = paginate(currentPage, lastPage)

	const Links = labels.map((label, i) => (
		<Link
			key={`${label}_${i}`}
			active={currentPage === label}
			disabled={label === null}
			to={localEndpoint(label)}
		>
			{label || '...'}
		</Link>
	))

	return [
		<Link
			key="previousPage"
			disabled={currentPage <= 1}
			to={localEndpoint(currentPage - 1)}
		>
			<Icon name="left chevron" />
		</Link>,
		Links,
		<Link
			key="nextPage"
			disabled={currentPage >= lastPage}
			to={localEndpoint(currentPage + 1)}
		>
			<Icon name="right chevron" />
		</Link>
	]
}


List.propTypes = {
	currentPage: PropTypes.number.isRequired,
	lastPage: PropTypes.number.isRequired,
}

export default List
