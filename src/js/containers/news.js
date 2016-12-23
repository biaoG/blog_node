import React,{Component,PropTypes} from 'react'
import { Link } from 'react-router' 

import FootNav from '../components/foot_nav'
import NewsContent from '../components/news/news_content'

export default  class News extends Component{
	render(){
		return(
			<div className="page-group">
				<div className="page">
				<FootNav index="3"/>
				<NewsContent/>
				</div>
			</div>
		)
	}
}