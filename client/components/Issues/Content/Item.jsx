import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import { CustomGrid } from '../Styles'
import { IssueById } from 'Components/FromRedux'

const Item = ({ id }) => (
	<IssueById id={id}>
		{({ issue }) => (
			<CustomGrid
				as={Link}
				to={`/issue/${id}`}
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
	</IssueById>
)

Item.propTypes = {
	id: PropTypes.number.isRequired
}

export default Item
