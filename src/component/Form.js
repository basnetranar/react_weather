import  React from 'react';
import 'semantic-ui-css/semantic.min.css';

class Form extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}

	render(){
		return(
			<div className = "ui container">
				<form onSubmit={this.props.getWeather}> 
					<input type="text" name="city" placeholder="city..."/>
					<button type="submit">Get Weather </button>
				</form>
			</div>
			);
	}
}

export default Form;
