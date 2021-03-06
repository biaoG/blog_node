import React,{Component,PropTypes} from 'react'
import {  Link } from 'react-router' 

export default class FootNav extends Component{
	render(){
		return ( 
			<nav className="bar bar-tab">
				<Link to="" className={this.props.index==0 ? "tab-item active" : "tab-item"}>
			      <span className="icon icon-home"></span>
			      <span className="tab-label">首页</span>
			    </Link>
			    <Link to="/baina"  className={this.props.index==1 ? "tab-item active" : "tab-item"}>
			      <span className="icon icon-bl"></span>
			      <span className="tab-label">白拿</span>
			    </Link>
			    <Link  to="gs" className={this.props.index==2 ? "tab-item active" : "tab-item"}>
			      <span className="icon icon-gs"></span>
			      <span className="tab-label">固收</span>
			    </Link>
			    <Link  to="news" className={this.props.index==3 ? "tab-item active" : "tab-item"}>
			      <span className="icon icon-fx"></span> 
			      <span className="tab-label">发现</span>
			    </Link>
			</nav>
		)
	}
}
FootNav.defaultProps = {
	index:0
}
FootNav.PropTypes={
	index:React.PropTypes.number.isRequired
} 