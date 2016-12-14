import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router' 
import {render} from 'react-dom'

import App from './containers/app'

render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
	 	</Route> 
	</Router>
	,
	document.getElementById("app")
)