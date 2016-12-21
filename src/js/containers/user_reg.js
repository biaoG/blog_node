import React,{Component,PropTypes} from 'react'

import HeadReg from '../components/head_reg'
import FootReg from '../components/foot_reg'
import UserRegs from '../components/user/user_reg'

export default class UserReg extends Component{
	render(){
		return(
			<div className="page-group">
				<HeadReg />
				<FootReg/>
				<UserRegs />
			</div>
		)
	}
}