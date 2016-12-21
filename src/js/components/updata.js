import React,{Component,PropTypes} from 'react'


export default class Updata extends Component{
	constructor(props){
        super(props);
        this.state = {
            progress:0,
            isupdate:this.props.updata,
            width:'0%'
        };
    }
	render(){
		
		return (
			<div className="page modal-over">
				<div className="updata-contain">
					<div className="updata-log"><img src="./assets/images/updata-fire.png"/></div>
					<div className="updata-body">
						<div className='updata-title'>更新提示</div>
						<p className='updata-word'>更新说明什么什么什么是啊但还是的撒发空间发发放机是发顺丰啊收大粉红色的非看撒谎发达了非。</p>
						<div className={this.state.isupdate ? "updata-foot hide" : "updata-foot"}>
							<button className="updata-button" onClick={(e) => this.handUpadta(e)}>点击更新</button>
						</div>
						<div className={this.state.isupdate ? "updata-proces " : "updata-proces hide"}>
							<p className="proces-num">{this.state.progress}%</p>
							<div className="proces-bg" style={{width:this.state.width}}></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
	handUpadta(e){
		e.preventDefault();
		this.setState({	isupdate:true});
		var that=this;
		this.timer=setInterval(function(){
			var proce=that.state.progress;
			if(proce<100){
				proce++;
				that.setState({progress:proce});
				that.setState({width:proce+'%'});
			}else{
				clearInterval(that.timer);
				that.props.setUpdate(false);
			}
		},30);
	}
}
Updata.PropTypes={
	setUpdate:PropTypes.func.isRequired,
	updata:PropTypes.bool.isRequired
}