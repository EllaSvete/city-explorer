import React from 'react';

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      city: ''
    };
  }

  handleCity = (e) => {
    this.setState({
      city: e.target.value
    });
  };

  render() {
    console.log(this.state);
    return (
    <main>
      <form>
        <label>Pick a City
          <input type="text" onInput={this.handleCity} name="city"/>
        </label>
        <button type="submit">Find City</button>
      </form>
    </main>
    )
  }
};


export default Main;