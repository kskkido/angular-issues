import Issues from './components/Issues'
import Issue from './components/Issue'

const routes = [
	{
		path: '/issues',
		component: Issues,
	},
	{
		path: '/issue/:number',
		component: Issue
	}
]

export default routes
