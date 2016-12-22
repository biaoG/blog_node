import React,{Component,PropTypes} from 'react'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import { Link } from 'react-router'  

export default  class UserLogin extends Component{
	constructor(props){
        super(props);
        this.state = {
         	userName:'',
         	userPwd:'',
         	canSubmit:false
        }
    }
	render(){
		let nameShow={display:this.state.userName.length > 0  ? "block" : "none"};
		let pwdShow={display: this.state.userPwd.length > 0  ? "block" : "none"};
		return (
			<div className="content">
				<div className="login-top"><img src="./assets/images/login-top-bg.png" /></div>
				<form className="login-contain" onSubmit={() => this.submit(e)}>
					<div className="login-line">
						<label className="log pull-left" htmlFor="userName"><img src="./assets/ico/icon-user.png" /></label>
						<input ref="userName" type="text" id="userName" className="login-input" placeholder="请输入登录帐号" pattern="[0-9]*"  value={this.state.userName} maxLength="11" onChange={() => this.setItem('userName')}  />
						<span style={nameShow} className="icon icon-clear" onClick={(e) => this.clearItem('userName')}></span>
					</div>
					<div className="login-line">
						<label className="log pull-left" htmlFor="userPwd"><img src="./assets/ico/icon-pwd.png" /></label>
						<input ref="userPwd" type="password" id="userPwd" className="login-input" placeholder="请输入登录密码" value={this.state.userPwd}  onChange={() => this.setItem('userPwd')} />
						<span style={pwdShow} className="icon icon-clear" onClick={(e) => this.clearItem('userPwd')}></span>
					</div>
					<div className="line-distance">
						<button className={this.state.canSubmit ? 'form-submit true' : 'form-submit'} type="submit">确认登录</button>
					</div>
					<div className="line-note">
						<Link to="getpwd" className="item-link">忘记密码</Link>   
						<Link to="reg" className="item-link">用户注册</Link>  
					</div>
				</form>
			</div>
		)
	}
	setItem(key,value){
		let val= value=='' ? '' : this.refs[key].value;
		this.setState({
			[key]:val
		});
		if(this.refs['userName'].value.length == 11 &&  this.refs['userPwd'].value.length>=6){
			this.setState({canSubmit:true});
		} else{
			this.setState({canSubmit:false});
		}
	}
	submit(e){
		e.preventDefault();
		if(this.state.canSubmit){
			alert("登录功能暂未开放");	
		}
	}
	clearItem(e,key){
		e.preventDefault();
		this.setItem(key,'');
	}
}