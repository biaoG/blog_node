import React,{Component,PropTypes} from 'react'
import { Link } from 'react-router'
import { isTel } from '../../public/resetDom'  

export default  class UserGetpwd extends Component{
	constructor(props){
        super(props);
        this.state = {
        	thisStep:1,
         	tel:'',
         	code:'',
         	pwd:'',
         	newPwd:'',
         	issms:false,
         	toSecd:false,
         	tothrid:false,
         	showSms:false,
         	smsTest:'获取验证码',
         	canSubmit:false
        }
    }
    setItem(key,value){
		let val= value=='' ? '' : this.refs[key].value;
		this.setState({
			[key]:val
		});
		if(this.refs['tel'].value.length == 11 &&  this.refs['code'].value.length>=4){
			this.setState({toSecd:true});
		} else{
			this.setState({toSecd:false});
		}
		if(this.refs['pwd'].value.length>5 && this.refs['newPwd'].value.length>5 && this.refs['pwd'].value===this.refs['newPwd'].value){
			this.setState({tothrid:true});
		}else{
			this.setState({tothrid:false});
		}
	}
	setStep(index){
		if(this.state.toSecd && index==2){
			this.setState({thisStep:index});
		}
		if(this.state.tothrid && index==3){
			this.setState({thisStep:index});
		}
	}
	canSms(){
		if(isTel(this.state.tel)){
			this.setState({showSms:true});
			var that=this;
			this.sendSms(5);
			setTimeout(function(){
				that.setState({showSms:false});
			},3000);
		}
	}
	sendSms(time){
		var lastTime=time;
		var that=this;
		var smsCount=setInterval(function(){
			if(lastTime>0){
				lastTime--;
				that.setState({smsTest:lastTime+'s',issms:true});
			}else{
				that.setState({smsTest:'获取验证码',issms:false});
				clearInterval(smsCount);
			}
		}, 1000);	
	}
	render(){
		let smsShow={display:this.state.showSms  ? "block" : "none"};
		let telShow={display:this.state.tel.length > 0  ? "block" : "none"};
		let pwdShow={display:this.state.pwd.length > 0  ? "block" : "none"};
		let newPwdShow={display:this.state.newPwd.length > 0  ? "block" : "none"};
		return(
			<div className="content">
				<div className="reg-step"  style={smsShow}>
					<div className="send-sms">已发送短信验证码至：{this.state.tel} ，请稍候...</div>
				</div>
				<div className={this.state.thisStep == 1 ? '' : 'hide'}>
					<div className="step-form">
						<div className="step-line">
							<label className="log pull-left" htmlFor="tel"><img src="./assets/ico/icon-user-reg.png" /></label>
							<input className="input" ref="tel" id="tel" placeholder="请收入手机号码"  pattern="[0-9]*" value={this.state.tel} maxLength='11' onChange={() => this.setItem('tel')} />
							<span  style={telShow} className="icon icon-clear" onClick={() => this.setItem('tel','')}></span>
						</div>
						<div className="step-line">
							<label className="log pull-left" htmlFor="code"><img src="./assets/ico/icon-sms-reg.png" /></label>
							<input className="input" ref="code" id="code" placeholder="请收入验证码"  value={this.state.code}  pattern="[0-9]*" maxLength='6' onChange={() => this.setItem('code')} />
							<span className={this.state.issms ? "getcode" : "getcode on"} onClick={() => this.canSms()}>{this.state.smsTest}</span>
						</div>
					</div>
					<div className="step-next">
						<button className={this.state.toSecd ? "to-next on" : "to-next"} onClick={() => this.setStep(2)}>下一步</button>
					</div>
					 
				</div>
				<div className={this.state.thisStep == 2 ? '' : 'hide'}>
					<div className="step-form">
						<div className="step-pwd-line">
							<label className="line-title">登录密码</label>
							<input type="password" ref="pwd" id="pwd" className="pwd-input" placeholder="6~16位数字或字母" onChange={() => this.setItem('pwd')} value={this.state.pwd} />
							<span  style={pwdShow} className="icon icon-clear" onClick={() => this.setItem('pwd','')}></span>
						</div>
						<div className="step-pwd-line">
							<label className="line-title">再次输入</label>
							<input type="password" ref="newPwd" id="newPwd" className="pwd-input" placeholder="请再次输入以确认" onChange={() => this.setItem('newPwd')} value={this.state.newPwd} />
							<span  style={newPwdShow} className="icon icon-clear" onClick={() => this.setItem('newPwd','')}></span>
						</div>
					</div>
					<div className="step-next">
						<button className={this.state.tothrid ? "to-next on" : "to-next"} onClick={() => this.setStep(3)}>设置密码</button>
					</div>
				</div>
				<div className={this.state.thisStep == 3 ? '' : 'hide'}>
					<div className="step-next top">
						<Link to="user" className="to-next on">密码已找回</Link>
					</div>
				</div>
			</div> 
		)
	}
}