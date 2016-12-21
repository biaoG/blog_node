import React,{Component,PropTypes} from 'react'
import {  Link } from 'react-router' 

export default class HeadReg extends Component{
	render(){
		return(
			<header className="bar nav blue reg-line">
				<Link to="/user" className="icon ico-img back-icon pull-left"><img src="./assets/ico/back-icon.png"/></Link>
				<h1 className="title">注册</h1>
			</header>
		)
	}
}