import React from 'react';
import Map from './Map.js';
import Weather from './Weather.js';
import Movies from './Movies.js';
// import Errormodal from './Errormodal.js';

class Main extends React.Component {
  render() {

    // let parseLat=parseInt(this.props.lat)
    // let parseLon=parseInt(this.props.lon)
   
    return (
      <>
    <main>
      <form onSubmit={this.props.submit}>
        <label>Pick a City
          <input type="text" onInput={this.props.handleCity} name="city"/>
        </label>
        <button type="submit">Explore!</button>
      </form>
    </main>
       <p>Lat: {this.props.lat}</p>
       <p>Lon: {this.props.lon}</p>
       <p>Name: {this.props.name}</p>
    <Map url={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${this.props.lat},${this.props.lon}&zoom=13`} name={this.props.name}/>
    <Weather weatherData={this.props.weatherData}
    />
    {this.props.movieData&&( <Movies movieData={this.props.movieData}
    />)}
   </>

    )
  }
};


export default Main;