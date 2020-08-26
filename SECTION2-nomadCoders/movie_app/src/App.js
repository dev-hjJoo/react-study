import React from 'react';
import PropTypes from 'prop-types';

// function component
/*
function App() {
  return (
   <div>
      
    </div>
  );
}
*/

class App extends React.Component {
  state = {
    count: 0
  }
  add = () => {
    this.setState(current => ({count: current.count+1}) );
  }
  minus = () => { 
    this.setState(current => ({count: current.count > 0 ? current.count-1: 0}) );
   }
  render() {
    return (
      <div> 
        <h1> I am a class component. </h1>
        <h2> my number is {this.state.count} </h2>
        <button onClick={this.add}> add </button>
        <button onClick={this.minus}> minus </button>
      </div>
    );
  }
}

export default App;
