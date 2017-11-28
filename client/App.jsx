import React from 'react'
import {
	Switch,
	Route,
	Redirect,
	BrowserRouter
} from 'react-router-dom'
import FilterQuery from './components/FilterQuery'
import Issues from './components/Issues'
// import { Router, Route, Switch, Link } from 'react-router-dom'

const App = () => {
	console.log('HIT ME')

	return (
		<BrowserRouter>
			<Switch>
				<Redirect exact from="/" to="/issues?page=1" />
				<Route
					exact
					path="/issues"
					render={({ location }) => (
						<FilterQuery
							filter={parsed => parsed.page}
							query={location.search}
							redirect="/issues?page=1"
						>
							{({ param }) => <Issues page={+param} />}
						</FilterQuery>
					)}
				/>
				<Route path="/issues/:id" component={Issues} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
