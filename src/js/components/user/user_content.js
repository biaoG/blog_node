import React,{Component,PropTypes} from 'react'

export default class UserContent extends Component{
	render(){
		return(
			<div className="content">
				<div className="user-head">
					<div className="head-top">
						<div className="top-title">总资产(元)</div>
						<div className="top-number">2,000.00 <span className="icon eye"></span></div>
					</div>
					<div className="head-tab view-tab">
						<div className="tab-item">
							<p className="tab-title">总收益(元)</p>		
							<p className="tab-num">300.00</p>		
						</div>
						<div className="tab-item line">
							<p className="tab-title">可用余额(元)</p>		
							<p className="tab-num">300.00</p>	
						</div>
					</div>		
				</div>
			</div>
		)
	}
}