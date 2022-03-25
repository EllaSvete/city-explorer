import React from 'react';
import Moviedata from './Moviedata';

class Movies extends React.Component {

  render() {

    return (
      <>
          {this.props.movieData.map((movie, index) =>

            <Moviedata
              key={index}
              movie={movie}
            />
           )
          }
      </>
    )
  }
}

export default Movies;