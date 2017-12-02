import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import routes from './routes'

const App = () => {
	const Routes = routes.map(route => <Route key={route.path} {...route} />)

	return (
		<Switch>
			{Routes}
			<Redirect from="*" to="/issues?page=1" />
		</Switch>
	)
}

export default App
