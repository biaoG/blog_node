import React,{Component,PropTypes} from 'react'
import {  Link } from 'react-router' 


export default class HomeCenter extends Component{ 
	render(){
		return (
				<div className="home-banner">
					<div className="banner-contain clearfix">
						<Link to="" className="banner-link "><img src="./assets/images/home-banner1.png"/></Link>
						<Link to="" className="banner-link"><img src="./assets/images/home-banner2.png"/></Link>
						<Link to="" className="banner-link "><img src="./assets/images/home-banner3.png"/></Link>
						<Link to="" className="banner-link"><img src="./assets/images/home-banner4.png"/></Link>
					</div>
				</div>
		)
	}
}