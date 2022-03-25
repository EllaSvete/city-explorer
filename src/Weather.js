import React from 'react';
import WeatherDay from './WeatherDay';
import { ListGroup } from 'react-bootstrap';

class Weather extends React.Component {

  render() {

    return (
      <>
        <ListGroup>
          {this.props.weatherData.map((weather, index) => 
            <WeatherDay class="weatherday"
              key={index}
              weather={weather}
            />
           )
          }
        </ListGroup>
      </>
    )
  }
}

export default Weather;
