import React,{Component,PropTypes} from 'react'

export default class HeaderUser extends Component{ 
	render(){
		return(
			<header className="bar nav blue">
				<a href="" className="icon ico-img avator-defaut pull-left"><img src="./assets/ico/avator.png"/></a>
				<h1 className="title"></h1>
				<a href="" className="icon ico-img bell pull-right"><img src="./assets/ico/bell.png"/></a>
			</header>
		)
	}
}