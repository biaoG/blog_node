import React,{Component,PropTypes} from 'react'
import { Link } from 'react-router'

export default class UserRegs extends Component{
	render(){
		return(
			<div className="content">
				<div className="reg-step">
					<span className="step on">① 验证手机号</span>	
					<span className="step">② 设置登录密码</span>	
					<span className="step">③ 注册完成</span>	
				</div>
				
				
			</div>
		)
	}
}
