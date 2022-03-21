import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cityData: {},
    };
  }

  handleCity = (e) => {
    this.setState({
      city: e.target.value
    });
  };
  
  getCityData = async (e) => {
    e.preventDefault();
    // get API data
    let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${this.state.city}&format=json`);
    this.setState({
      cityData: cityData.data[0],
    });
    console.log(this.state.cityData);
  }
  
  render() {
    return (
      <>
      <Header/>
      <Main/>
    <main>
      <form onSubmit={this.getCityData}>
        <label>Pick a City
          <input type="text" onInput={this.handleCity} name="city"/>
        </label>
        <button type="submit">Explore!</button>
      </form>
    </main>
    <p>lon: {this.state.cityData.lon}</p>
    <p>lat:{this.state.cityData.lat}</p>
    <p>name:{this.state.cityData.display_name}</p>
    <Footer/>
      </>
    )
  }
}

export default App;
