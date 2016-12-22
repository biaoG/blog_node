import React,{Component,PropTypes} from 'react'
import { Link } from 'react-router'  

export default  class BainaContent extends Component{
	render(){
		return(
			<div className="content">
				<div className="bai-top">
					<Link to=""><img src="./assets/images/bl-top.png" /></Link>
				</div>
				<div className="bai-list clearfix">
					<div className="bai-item pull-left">
						<Link to="" className="item-img"><img src="./assets/images/product-1.png" /></Link>
						<div className="item-foot">
							<p className="pro-title">IPHONE 6s</p>
							<p className="desc">实际可用容量会由于诸多因素而减少并有所差异实际可用容量会由于诸多因素而减少并有所差异</p>
						</div>
					</div>
					<div className="bai-item pull-left">
						<Link to="" className="item-img"><img src="./assets/images/product-1.png" /></Link>
						<div className="item-foot">
							<p className="pro-title">IPHONE 6s</p>
							<p className="desc">实际可用容量会由于诸多因素而减少并有所差异实际可用容量会由于诸多因素而减少并有所差异</p>
						</div>
					</div>
					<div className="bai-item pull-left">
						<Link to="" className="item-img"><img src="./assets/images/product-1.png" /></Link>
						<div className="item-foot">
							<p className="pro-title">IPHONE 6s</p>
							<p className="desc">实际可用容量会由于诸多因素而减少并有所差异实际可用容量会由于诸多因素而减少并有所差异</p>
						</div>
					</div>
					<div className="bai-item pull-left">
						<Link to="" className="item-img"><img src="./assets/images/product-1.png" /></Link>
						<div className="item-foot">
							<p className="pro-title">IPHONE 6s</p>
							<p className="desc">实际可用容量会由于诸多因素而减少并有所差异实际可用容量会由于诸多因素而减少并有所差异</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}