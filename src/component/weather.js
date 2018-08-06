import  React from 'react';
import 'semantic-ui-css/semantic.min.css';

class Weather extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {};
	}

	render(){
		return(
			<div className = "ui container">
				<h1>Rendering weather page </h1>
				{this.props.city && this.props.country && <div>Location: {this.props.city}, {this.props.country}</div>}
				{this.props.temperature && <div>Temperature: {this.props.temperature}</div>}
				{this.props.feelsLike && <div>Feels Like:{this.props.feelsLike} </div>}
				{this.props.condition && <div>Condition: {this.props.condition} </div>}
				{this.props.error && <div>{this.props.error}</div>}
			</div>
			);
	}
}

export default Weather;