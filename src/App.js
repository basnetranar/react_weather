import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import Titles from './component/titles';
import Form from './component/Form';
import Weather from './component/weather';

const API_KEY = '831ba80bf1bf44dc9ba32019180305';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      country: undefined,
      city: undefined,
      temperature: undefined,
      feels_like: undefined,
      condition: undefined,
      error: undefined
    };

    this.getWeather = this.getWeather.bind(this);
  };

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`https://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5`)
    const data = await api_call.json();

    if(city){
      this.setState({
        condition: data.current.condition.text,
        feels_like: data.current.feelslike_c,
        temperature: data.current.temp_c,
        country: data.location.country,
        city: data.location.name,
        error: undefined
      });
     }
     else{
       console.log('no city');
       this.setState({
         condition: undefined,
        feels_like: undefined,
        temperature: undefined,
        country: undefined,
        city: undefined,
         error: "Please enter a valid city"
       });
     }
    console.log(this.state.error);
  };

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather 
          temperature = {this.state.temperature}
          country = {this.state.country}
          city = {this.state.city}
          feelsLike = {this.state.feels_like}
          condition = {this.state.condition}
          error = {this.state.error}
        />
      </div>
    )
  }
}

export default App;