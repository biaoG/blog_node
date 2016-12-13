import React,{Component,PropTypes} from 'react'
export default class FootNav extends Component{
	render(){
		return ( 
			<nav className="bar bar-tab">
				<a className="tab-item active" href="#">
			      <span className="icon icon-home"></span>
			      <span className="tab-label">首页</span>
			    </a>
			    <a className="tab-item" href="#">
			      <span className="icon icon-bl"></span>
			      <span className="tab-label">白拿</span>
			    </a>
			    <a className="tab-item " href="#">
			      <span className="icon icon-gs"></span>
			      <span className="tab-label">固收</span>
			    </a>
			    <a className="tab-item " href="#">
			      <span className="icon icon-fx"></span> 
			      <span className="tab-label">发现</span>
			    </a>
			</nav>
		)
	}
}