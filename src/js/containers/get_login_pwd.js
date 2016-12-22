import React,{Component,PropTypes} from 'react'

import HeadReg from '../components/head_reg'
import FootReg from '../components/foot_reg'
import UserGetpwd from '../components/user/user_getpwd'

export default class GetLoginPwd extends Component{
	render(){
		return(
			<div className="page-group">
				<HeadReg title="重置密码" />
				<UserGetpwd/>
				<FootReg/>
			</div>
		)
	}
}