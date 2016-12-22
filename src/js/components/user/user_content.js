import React,{Component,PropTypes} from 'react'
import { Link } from 'react-router' 
 import HomeCenter from '../home/home_center'
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
				<div className="user-tab">
					<div className="view-tab">
						<Link to="" className="tab-item u-link">提现</Link>
						<Link to="" className="tab-item u-link">充值</Link>
					</div>
				</div>
				<div className="user-link">
					<div className="link-line view-tab">
						<Link to="" className="link-item tab-item">
							<div className="item-logo"><img src="./assets/ico/icon-search.png"/></div>
							<div className="item-name">回款日历</div>
						</Link>
						<Link to="" className="link-item tab-item line">
							<div className="item-logo"><img src="./assets/ico/icon-wdtz.png"/></div>
							<div className="item-name">我的投资</div>
						</Link>
						<Link to="" className="link-item tab-item line">
							<div className="item-logo"><img src="./assets/ico/icon-jymx.png"/></div>
							<div className="item-name">交易明细</div>
						</Link>
					</div>
					<div className="link-line view-tab">
						<Link to="" className="link-item tab-item">
							<div className="item-logo"><img src="./assets/ico/icon-xsrw.png"/></div>
							<div className="item-name">新手任务</div>
						</Link>
						<Link to="" className="link-item tab-item line">
							<div className="item-logo"><img src="./assets/ico/icon-wdkq.png"/></div>
							<div className="item-name">我的卡券</div>
						</Link>
						<Link to="" className="link-item tab-item line">
							<div className="item-logo"><img src="./assets/ico/icon-vip.png"/></div>
							<div className="item-name">VIP等级</div>
						</Link>
					</div>
				</div>
				 <HomeCenter/>
			</div>
		)
	}
}