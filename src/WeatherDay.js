import React from 'react';

class WeatherDay extends React.Component {

  render(){
    return (
      <p>Date: {this.props.weather.time} Forecast: {this.props.weather.forecast}</p>
    );
  }
}

export default WeatherDay;