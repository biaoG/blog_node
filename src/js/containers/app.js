import React,{Component,PropTypes} from 'react'

import HeaderUser from '../components/header_user'
import FootNav from '../components/foot_nav'
import Updata from '../components/updata'

class App extends Component{
	constructor(props){
        super(props);
        this.state = {
            isUpdata: true,
        };
    }
     
	render(){
		{/*判断是否更新*/}
		let modal;
    	this.state.isUpdata ? modal= <Updata updata={this.state.isUpdate} /> : null;

		return (
			<div className="page-group">
				<div className="page">
					<HeaderUser />
					<FootNav/>
					{this.props.children}
				</div>
				 {modal}
				 
			</div>
		)
	}
	update(state){
		this.setState({	isupdate:state});
	}
}
export default App 