import React from 'react';
import Card from 'react-bootstrap/Card';

class Moviedata extends React.Component {

  render(){
    return (
    
      <Card key={this.props.index} border="primary" style={{ width: '18rem'}}>
        <Card.Header>Text</Card.Header>
        <Card.Img variant="top"/>
        <Card.Body>
          <Card.Title>{this.props.movie.title}</Card.Title>
          <Card.Text>
          {this.props.movie.description}
             <p>Language: {this.props.movie.language}</p>
          </Card.Text>
        </Card.Body>

      </Card>

    
    );
  }
}

export default Moviedata;