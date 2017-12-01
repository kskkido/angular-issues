import { Grid } from 'semantic-ui-react'
import styled from 'styled-components'

export const CustomGrid = styled(Grid)`
	cursor: pointer;

	&:hover {
		background-color: rgba(0,0,0,.05);
		color: rgba(0,0,0,.95);
	}
`
