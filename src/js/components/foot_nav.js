import React,{Component,PropTypes} from 'react'
import {  Link } from 'react-router' 
export default class FootNav extends Component{
	render(){
		return ( 
			<nav className="bar bar-tab">
				<Link to="" className="tab-item active">
			      <span className="icon icon-home"></span>
			      <span className="tab-label">首页</span>
			    </Link>
			    <Link to=""  className="tab-item">
			      <span className="icon icon-bl"></span>
			      <span className="tab-label">白拿</span>
			    </Link>
			    <Link  to="" className="tab-item ">
			      <span className="icon icon-gs"></span>
			      <span className="tab-label">固收</span>
			    </Link>
			    <Link  to="" className="tab-item ">
			      <span className="icon icon-fx"></span> 
			      <span className="tab-label">发现</span>
			    </Link>
			</nav>
		)
	}
}