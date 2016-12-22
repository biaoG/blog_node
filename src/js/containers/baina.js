import React,{Component,PropTypes} from 'react'
import { Link } from 'react-router'  

import FootNav from '../components/foot_nav'
import BainaContent from '../components/baina/baina_content'

export default  class Baina extends Component{
	render(){
		return (
			<div className="page-group">
				<div className="page">
					<FootNav  index='1' />
					<BainaContent/>
				</div>
			</div>
		)
	}
}