import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { CustomGrid } from '../Styles'
import { IssueByNumber } from 'Components/FromRedux'

const Item = ({ number }) => (
	<IssueByNumber number={number}>
		{({ issue }) => (
			<CustomGrid
				as={Link}
				to={`/issue/${number}`}
				divided
				stackable
			>
				<Grid.Column
					width={2}
					textAlign="center"
				>
					#{issue.number}
				</Grid.Column>
				<Grid.Column width={10}>
					{issue.title}
				</Grid.Column>
			</CustomGrid>
		)}
	</IssueByNumber>
)

Item.propTypes = {
	number: PropTypes.number.isRequired
}

export default Item
