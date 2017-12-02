import React from 'react'
import { Redirect } from 'react-router-dom'
import Issues from './components/Issues'
import Issue from './components/Issue'

const routes = [
	{
		path: '/issues',
		component: Issues,
	},
	{
		path: '/issue/:id',
		component: Issue
	}
]

export default routes
