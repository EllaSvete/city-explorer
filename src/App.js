import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import axios from 'axios';
import './App.css';
// import CityCards from './CityCards';

const API_KEY = process.env.REACT_APP_API_KEY

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      lon: '',
      name: '',
      searchQuery: '',
      error: false,
      errorMessage: '',
      showModal: false,
      weather: [],
      movies: [],
    };
  }
  hideModal = () => {
    this.setState({
      showModal: false,
    })
  }

  handleShowModal = () => {
    this.setState({
      showModal: true,
    })
  }

  handleCity = (e) => {
    this.setState({
      searchQuery: e.target.value
    });
  };

  getCityData = async (e) => {
    e.preventDefault();
    try {
      //get API data
      let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${this.state.searchQuery}&format=json&limit=5`);
      console.log(cityData);
      this.setState({
        lat: cityData.data[0].lat,
        lon: cityData.data[0].lon,
        name: cityData.data[0].display_name,
      });
    } catch (error) {
      this.setState({
        error: true,
        showModal: true,
        errorMessage: `An error occurred: ${error.response.status} ${error.response.statusText}`,
        lat: '',
        lon: '',
        name: '',
      });
      console.log(this.state.errorMessage);
    }
    this.showWeather(this.state.lat, this.state.lon);
    this.showMovies(this.state.searchQuery);
  };

  showWeather = async (lat, lon) => {
    try {
     const cityWeather = await axios.get(`${process.env.REACT_APP_SERVER}/weather`, {params:{lat: lat, lon: lon, city: this.state.searchQuery}})
     console.log(cityWeather);
     this.setState({
       weather: cityWeather.data
      })
      console.log(this.state.weather);
    } catch(error) {
      console.log(error.message);
      this.setState({
        error: true,
        showModal: true,
        errorMessage: `An error occurred: ${error.response} ${error.response}`,
      });
    }
  }

  showMovies = async (city) => {

    try {
      let movieUrl = await axios.get(`${process.env.REACT_APP_SERVER}/movies?city=${city}`)
      this.setState({
        cityMovie: movieUrl.data,
      });
    } catch(error) {
      this.setState({
        error: true,
        errorMessage: `An error occurred: ${error.response} ${error.response}`,
      });
    }
    console.log(this.state.cityMovie);
  }


  render() {
    return (
      <>
        <Header />
        <Main 
        lat={this.state.lat} 
        lon={this.state.lon} 
        name={this.state.name} 
        submit={this.getCityData}
        handleCity={this.handleCity} 
        weatherData={this.state.weather} 
        movieData={this.state.cityMovie}/>
        <Footer />
      </>
    );
  }
}

export default App;
