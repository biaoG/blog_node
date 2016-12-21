import React,{Component,PropTypes} from 'react'

import LoginHead from '../components/head_login'
import UserLogin from '../components/user/user_login'
import FootLogin from '../components/foot_login'

export default class UserLg extends Component{
	render(){
		return (
			<div className="page-group page-login">
				<LoginHead/>
				<FootLogin/>
				<UserLogin/>
			</div>	
		)
	}
}