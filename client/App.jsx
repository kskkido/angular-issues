import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Issues from './components/Issues'
import Issue from './components/Issue'

const App = () => (
	<Switch>
		<Redirect exact from="/" to="/issues?page=1" />
		<Route
			exact
			path="/issues"
			component={Issues}
		/>
		<Route
			path="/issue/:id"
			component={Issue}
		/>
	</Switch>
)

export default App
