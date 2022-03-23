import React from 'react';
import Weatherdata from './Weatherdata';
import {ListGroup} from 'react-bootstrap';

class Weather extends React.Component {

  render() {

  return (
    <>
    <ListGroup>
    {this.props.weatherData.map((weather, index) => 
      <Weatherdata
      key = {index}
      weather = {weather}
      />
      )
    }
      </ListGroup>
    

    
    </>
  )}
}

  export default Weather;


  // this.props.weatherData.map(day => (
  //  <>
  //  <p>day.valid_date</p>
  //  <p>day.description</p>
  //  </>
  // ))