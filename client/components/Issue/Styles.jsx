import styled from 'styled-components'

export const Container = styled.div`
	margin: 20px 0;

	& > div {
		margin-top: 20px;
	}
`

export const Content = styled.div`
	height: 80vh;
	overflow-y: scroll;
`

export const Navigation = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const User = styled.div`
	padding-bottom: 10px;
`

export const Pre = styled.pre`
	background: rgba(0,0,0,.05);
	padding: 10px;
	white-space: pre-wrap;
`
