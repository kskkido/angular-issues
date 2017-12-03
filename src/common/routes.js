import Issues from './components/Issues'
import Issue from './components/Issue'

/* use to create route components and match url on server side for intial render */
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
