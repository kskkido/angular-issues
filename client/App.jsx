import React from 'react'
import {
	Switch,
	Route,
	BrowserRouter
} from 'react-router-dom'
import queryString from 'query-string'
import Issues from './components/Issues'
// import { Router, Route, Switch, Link } from 'react-router-dom'

const App = () => {
	console.log('HIT ME')

	return (
		<BrowserRouter basename="/issues">
			<Switch>
				<Route exact path="/" component={Issues} />
				<Route path="/:id" component={Issues} />
			</Switch>
		</BrowserRouter>
	)
}

export default App
