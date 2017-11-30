import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import parse from 'Utils/parse'
import Issues from './components/Issues'
// import { Router, Route, Switch, Link } from 'react-router-dom'

const App = () => (
	<Switch>
		<Redirect exact from="/" to="/issues?page=1" />
		<Route
			exact
			path="/issues"
			render={({ location }) => {
				const page = parse(location.search, 'page')

				return page ?
					<Issues page={+page} /> :
					<Redirect to="/issues?page=1" />
			}}
		/>
		<Route path="/issues/:id" component={Issues} />
	</Switch>
)

export default App
