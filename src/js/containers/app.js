import React,{Component,PropTypes} from 'react'

import HeaderUser from '../components/header_user'
import FootNav from '../components/foot_nav'

import HomeContent from '../components/home/home_content'
import UserContent from '../components/user/user_content'

class App extends Component{
	 
	render(){
		return (
			<div className="page-group">
				<div className="page">
					<HeaderUser />
					<FootNav/>
					{this.props.children}
				</div>
			</div>
		)
	}
}
export default App 