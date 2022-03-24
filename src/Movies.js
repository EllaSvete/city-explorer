import React from 'react';
import Moviedata from './Moviedata';
// import Cards from 'react-bootstrap';
import {ListGroup} from 'react-bootstrap';

class Movies extends React.Component {

  render() {

  return (
    <>

    <ListGroup>
    {this.props.movieData.map((movie, index) => 
  
      <Moviedata
      key = {index}
      movie = {movie}
      />
      )
    }
      </ListGroup>
    

    
    </>
  )}
}

  export default Movies;