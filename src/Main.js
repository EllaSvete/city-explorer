import React from 'react';
import Map from './Map.js';
// import Errormodal from './Errormodal.js';

class Main extends React.Component {


  render() {
    console.log(this.state);
    let parseLat=parseInt(this.props.lat)
    let parseLon=parseInt(this.props.lon)
    console.log(parseLat, parseLon);
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
    <Map url={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_API_KEY}&center=${parseLat},${parseLon}&zoom=8`} name={this.props.name}/>

  
    {/* {<p>Sorry city doesn't exist</p>}
    <Errormodal 
    error={this.state.error}
    errorMessage={this.state.showModal}
    modalState={this.state.showModal}
    hideModal={this.hideModal}
    handleShowModal={this.handleShowModal}
    /> */}
  
  </>
  

    )
  }
};


export default Main;