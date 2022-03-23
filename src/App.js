import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import axios from 'axios';
import './App.css';
// import CityCards from './CityCards';

const API_KEY = process.env.REACT_APP_API_KEY

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lat: '',
      lon: '',
      name: '',
      searchQuery: '',
      error: false,
      errorMessage: '',
      showModal: false,
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
      let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${API_KEY}&q=${this.state.searchQuery}&format=json`);
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
              lon:'',
              name:'',
            });
            console.log(this.state.errorMessage);
          }
        };
        
        render() {
    console.log(this.state);
    return (
      <>
      <Header/>
      <Main   lat={this.state.lat} lon={this.state.lon} name={this.state.name} submit={this.getCityData} handleCity={this.handleCity}/>
      {/* <CityCards
       city={this.state.cityData.display_name}
       lat={this.state.cityData.lat}
       lon={this.state.cityData.lon}
      /> */}
    <Footer/>
      </>
    );
  }
}

export default App;
