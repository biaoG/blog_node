import React,{Component,PropTypes} from 'react'
import {  Link } from 'react-router' 

export default class LoginHead extends Component {
	render(){
		return(
			<header className="bar nav blue">
				<Link to="/user" className="icon ico-img demu-icon pull-left"><img src="./assets/ico/menu-icon.png"/></Link>
				<h1 className="title">登录</h1>
			</header>
		)
	}
} 