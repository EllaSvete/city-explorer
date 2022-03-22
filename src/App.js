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
      lat: '',
      lon: '',
      name: '',
      searchQuery: '',
      // error: false,
      // errorMessage: '',
    };
  }

  handleCity = (e) => {
    this.setState({
      searchQuery: e.target.value
    });
  };
  
  getCityData = async (e) => {
    e.preventDefault();
    // try {
      // get API data
      let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${this.state.searchQuery}&format=json`);
      this.setState({
        lat: cityData.data[0].lat,
        lon: cityData.data[0].lon,
        name: cityData.data[0].display_name,
      });
      // } catch (error) {
        //   this.setState({
          //     error: true,
          //     errorMessage: `An error occurred: ${error.response.status}`
          //   })
          // }
        };
        
        render() {
    console.log(this.state);
    // let cityList = this.state.cityData.map(())
    return (
      <>
      <Header/>
      <Main lat={this.state.lat} lon={this.state.lon} name={this.state.name} submit={this.getCityData} handleCity={this.handleCity}/>
    <Footer/>
      </>
    )
  }
}

export default App;
