/* eslint-disable no-unused-expressions */
import styled, { injectGlobal } from 'styled-components'
import Global from './global'

injectGlobal`${Global}`

export const View = styled.div`
	position: relative;
	padding-top: 20px;
	margin-left: auto;
	margin-right: auto;
	width: 70vw;
`

export const Content = styled.div`
	padding: 20px;
	min-height: 80vh;
`

export const Navigation = styled.div`
	padding-top: 20px;
	padding-bottom: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
`
