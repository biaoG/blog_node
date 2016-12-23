import React,{Component,PropTypes} from 'react'
import { Link } from 'react-router' 

import FootNav from '../components/foot_nav'
import GusContent from '../components/gushou/gushou_content'

export default  class GuShou extends Component{
	render(){
		return(
			<div className="page">
				<FootNav index='2' />
				<GusContent />
			</div>
		)
	}
}