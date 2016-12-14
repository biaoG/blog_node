import React,{Component,PropTypes} from 'react'
import { reset } from '../public/resetDom'

import HeaderUser from '../components/header_user'
import FootNav from '../components/foot_nav'
import HomeContent from '../components/home_content'

class App extends Component{
	componentWillMount(){
		reset();
	}
	render(){
		return (
			<div className="page-group">
				<div className="page">
					<HeaderUser />
					<FootNav/>
					<HomeContent/>
				</div>
			</div>
		)
	}
}
export default App 