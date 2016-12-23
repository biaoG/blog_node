import React from 'react'
import { Router, Route, Link, hashHistory,IndexRoute  } from 'react-router' 
import { reset } from './public/resetDom'
import {render} from 'react-dom'

import App from './containers/App'
import UserLg from './containers/user_login'
import UserReg from './containers/user_reg'
import GetLoginPwd from './containers/get_login_pwd'
import Baina from './containers/baina'
import WhyBn from './containers/whybn'
import GuShou from './containers/gushou'
import Whygs from './containers/whygs'
import News from './containers/news'

import HomeContent from './components/home/home_content'
import UserContent from './components/user/user_content'

reset();

render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={HomeContent} />
			<Route path="user" component={UserContent} />
		</Route>
		<Route path="login" component={UserLg} />
		<Route path="reg" component={UserReg} />
		<Route path="getpwd" component={GetLoginPwd} />		
		<Route path="baina" component={Baina} />		
		<Route path="whybn" component={WhyBn} />
		<Route path="gs" component={GuShou} />	
		<Route path="whygs" component={Whygs} />	
		<Route path="news" component={News} />	
	</Router>
	,
	document.getElementById("app")
)