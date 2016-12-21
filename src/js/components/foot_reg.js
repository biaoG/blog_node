import React,{Component,PropTypes} from 'react'
import { Link } from 'react-router'

export default class FootReg extends Component{
	render(){
		return(
			<div className="bar bar-tab reg">
				<Link className="kf-link" href="tel:18320893463">客服热线：183-2089-3463</Link>
			</div>
		)
	}
}