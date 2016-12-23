import React,{Component,PropTypes} from 'react'
import { Link } from 'react-router' 

import NewsBan from './news_ban'

export default  class NewsContent extends Component{
	render(){
		return(
			<div className="content">
				<NewsBan/>
				<div className="hot-news"><Link to="" className="link">
					<span className="icon new-gg"><img src="./assets/ico/gg.png" /></span>
					新闻：湖北调用1吨炸药实施紧急爆...
				</Link></div>
				<div className="new-list">
					<div className="list-head">
						<div className="head-title">理财资讯</div>
						<Link to="" className="more">查看更多</Link>
					</div>
					<div className="list-new">
						<div className="new-item">
							<Link to="" className="new-title">逆袭之星—佰亿猫，给梦想前行的新能量！！</Link>
							<p className="time">2016.06.06 15:30:30</p>
							<Link to="" className="img"><img src="./assets/images/news-image.png" /></Link>
						</div>
						<div className="new-item">
							<Link to="" className="new-title">逆袭之星—佰亿猫，给梦想前行的新能量！！</Link>
							<p className="time">2016.06.06 15:30:30</p>
							<Link to="" className="img"><img src="./assets/images/news-image.png" /></Link>
						</div>
						<div className="new-item">
							<Link to="" className="new-title">逆袭之星—佰亿猫，给梦想前行的新能量！！</Link>
							<p className="time">2016.06.06 15:30:30</p>
							<Link to="" className="img"><img src="./assets/images/news-image.png" /></Link>
						</div>
						<div className="new-item">
							<Link to="" className="new-title">逆袭之星—佰亿猫，给梦想前行的新能量！！</Link>
							<p className="time">2016.06.06 15:30:30</p>
							<Link to="" className="img"><img src="./assets/images/news-image.png" /></Link>
						</div>
					</div>
				</div>

				<div className="link-list">
					<Link to="" className="link-item">关于我们</Link>
					<Link to="" className="link-item">联系客服</Link>
					<Link to="" className="link-item">常见问题</Link>
				</div>

			</div>
		)

	}
}