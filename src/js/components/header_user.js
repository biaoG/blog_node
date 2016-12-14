import React,{Component,PropTypes} from 'react'
import {  Link } from 'react-router' 
export default class HeaderUser extends Component{ 
	render(){
		return(
			<header className="bar nav blue">
				<Link to="/user" className="icon ico-img avator-defaut pull-left"><img src="./assets/ico/avator.png"/></Link>
				<h1 className="title"></h1>
				<Link to="" className="icon ico-img bell pull-right"><img src="./assets/ico/bell.png"/></Link>
			</header>
		)
	}
}