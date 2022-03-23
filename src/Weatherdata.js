import React from 'react';

class Weatherdata extends React.Component {

  render(){
    return (
      <p>Date: {this.props.weather.date} Forecast: {this.props.weather.description}</p>
    );
  }
}

export default Weatherdata;