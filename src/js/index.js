import React from 'react'
import { Router, Route, Link, hashHistory,IndexRoute  } from 'react-router' 
import { reset } from './public/resetDom'
import {render} from 'react-dom'

import App from './containers/App'
import User from './containers/user'

import HomeContent from './components/home/home_content'
import UserContent from './components/user/user_content'


reset();

render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={HomeContent} />
			<Route path="user" component={UserContent} />
		</Route>
		<Route path="login" component={User} />

		
	</Router>
	,
	document.getElementById("app")
)