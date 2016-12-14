import React,{Component,PropTypes} from 'react'
import {  Link } from 'react-router' 

import HomeBan from './home_ban'

export default class HomeContent extends Component{ 
	handleSwipe(e) {
    	console.log(e);
    }
	render(){
		return(
			<div className="content">
				{/*头部*/}
				<div className="home-top">
					 <HomeBan />
				</div>
				 
				 {/* 中间banner */}
				<div className="home-banner">
					<div className="banner-contain clearfix">
						<Link to="" className="banner-link "><img src="./assets/images/home-banner1.png"/></Link>
						<Link to="" className="banner-link"><img src="./assets/images/home-banner2.png"/></Link>
						<Link to="" className="banner-link "><img src="./assets/images/home-banner3.png"/></Link>
						<Link to="" className="banner-link"><img src="./assets/images/home-banner4.png"/></Link>
					</div>
				</div>

				{/*产品*/}
				<div className="home-pro">
					<div className="card-pro">
						<Link to="" className="card-head pro-title">
							新手尊享
							<span className="title-tag blue">短期理财</span>
							<span className="title-tag yellow">新手专享</span>
						</Link>
						<div className="view-tab">
							<div className="tab-item"><span className="top red">15<sub>%</sub></span><span className="down">年化收益率</span></div>
							<div className="tab-item"><span className="top">10天</span><span className="down">投资期限</span></div>
							<div className="tab-item"><span className="top">100元</span><span className="down">起投金额</span></div>
						</div>
					</div>
				</div>

				{/*广告位*/}
				<div className="">
				<Link to=""><img src="./assets/images/home-adv.png" /></Link>
				</div>

			</div>
		)
	}

	 handleSwipe(e) {
	    console.log(e);
	  }
}