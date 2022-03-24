import React from 'react';

class Moviedata extends React.Component {

  render(){
    return (
      <>
      <h3>{this.props.movie.title}</h3> 
      <p>Overview: {this.props.movie.description}</p> 
      <p>Language: {this.props.movie.language}</p>
      </>
    );
  }
}

export default Moviedata;