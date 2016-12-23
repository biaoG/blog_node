import React,{Component,PropTypes} from 'react'
import { Link } from 'react-router' 

export default class NewsBan extends Component{ 
	componentDidMount(){
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.onload = function(){
		    var swiper = new Swiper('#banner', {
			    direction: 'horizontal',
				loop: true,
				 pagination: '.swiper-pagination'
			});
		};
		script.src = "./vendor/swiper/dist/js/swiper.min.js";
		document.getElementById("homeBanner").appendChild(script);		 
	}
	render(){
		return(
			<div id="homeBanner">
				<link rel="stylesheet" href="./vendor/swiper/dist/css/swiper.min.css"/> 
				<div className="swiper-container" id="banner">
   					 <div className="swiper-wrapper">
   					 	<div className="swiper-slide"><Link to="" className="banner"><img src="./assets/images/new-baner1.png"/></Link></div>
   					 	<div className="swiper-slide"><Link to="" className="banner"><img src="./assets/images/new-baner2.png"/></Link></div>
   					 	<div className="swiper-slide"><Link to="" className="banner"><img src="./assets/images/new-baner1.png"/></Link></div>
   					 	<div className="swiper-slide"><Link to="" className="banner"><img src="./assets/images/new-baner2.png"/></Link></div>
   					 </div>
   					 <div className="swiper-pagination page-swiper"></div>
       			</div>		
			</div>
		)
	}
}