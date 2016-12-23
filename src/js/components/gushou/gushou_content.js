import React,{Component,PropTypes} from 'react'
import { Link } from 'react-router' 

export default  class GusContent extends Component{
	render(){
		return(
			<div className="content">
				<div className="bai-top"><Link to="whygs"><img src="./assets/images/gs-top.png"/></Link></div>
				<div className="gs-timeselect">
					<div className="gs-time-contain">
						<span className="time-item on">全部</span>
						<span className="time-item">0~3个月</span>
						<span className="time-item">3~6个月</span>
						<span className="time-item">6~9个月</span>
					</div>
				</div>
				<div className="gs-product">
					<div className="product-item">
						<div className="item-left">
							<div className="percent">7.8<sub>%</sub></div>
							<div className="desc">年化收益率</div>
						</div>
						<div className="item-right">
							<div className="pro-title">房盈宝-红本抵押 3期</div>
							<div className="pro-tag">数据风控&nbsp;&nbsp;收益稳健</div>
							<div className="buy-log">抢购</div>
						</div>
					</div>
					<div className="product-item act">
						<div className="item-left">
							<div className="percent">7.8<sub>%</sub></div>
							<div className="desc">年化收益率</div>
						</div>
						<div className="item-right">
							<div className="pro-title">房盈宝-红本抵押 3期</div>
							<div className="pro-tag">数据风控&nbsp;&nbsp;收益稳健</div>
							<div className="buy-log">抢购</div>
						</div>
					</div>
					<div className="product-item act unabled">
						<div className="item-left">
							<div className="percent">7.8<sub>%</sub></div>
							<div className="desc">年化收益率</div>
						</div>
						<div className="item-right">
							<div className="pro-title">房盈宝-红本抵押 3期</div>
							<div className="pro-tag">数据风控&nbsp;&nbsp;收益稳健</div>
							<div className="buy-log">售罄</div>
						</div>
					</div>
					<div className="product-item unabled">
						<div className="item-left">
							<div className="percent">7.8<sub>%</sub></div>
							<div className="desc">年化收益率</div>
						</div>
						<div className="item-right">
							<div className="pro-title">房盈宝-红本抵押 3期</div>
							<div className="pro-tag">数据风控&nbsp;&nbsp;收益稳健</div>
							<div className="buy-log">售罄</div>
						</div>
					</div>
					<div className="product-item">
						<div className="item-left">
							<div className="percent">7.8<sub>%</sub></div>
							<div className="desc">年化收益率</div>
						</div>
						<div className="item-right">
							<div className="pro-title">房盈宝-红本抵押 3期</div>
							<div className="pro-tag">数据风控&nbsp;&nbsp;收益稳健</div>
							<div className="buy-log">抢购</div>
						</div>
					</div>
					<div className="product-item act">
						<div className="item-left">
							<div className="percent">7.8<sub>%</sub></div>
							<div className="desc">年化收益率</div>
						</div>
						<div className="item-right">
							<div className="pro-title">房盈宝-红本抵押 3期</div>
							<div className="pro-tag">数据风控&nbsp;&nbsp;收益稳健</div>
							<div className="buy-log">抢购</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}