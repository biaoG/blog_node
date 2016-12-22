import React,{Component,PropTypes} from 'react'
import {  Link } from 'react-router' 

export default class HeadReg extends Component{
	render(){
		return(
			<header className="bar nav blue reg-line">
				<Link to="/login" className="icon ico-img back-icon pull-left"><img src="./assets/ico/back-icon.png"/></Link>
				<h1 className="title">{this.props.title}</h1>
			</header>
		)
	}
}
HeadReg.PropType={
	title: PropTypes.string.isRequired
}