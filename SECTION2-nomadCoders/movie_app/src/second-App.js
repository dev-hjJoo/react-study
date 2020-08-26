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

  constructor(props) {
    // 에러를 잡기 위해 매개변수와 아래 코드를 썼지만, 아직까지는 크게 신경쓰지 말자~!
    super(props)
    console.log("hey! I am constructor!")
  }

  componentDidMount() {
    // 첫 render를 수행했음을 알려주는 것!
    console.log("woo... I am componentDidMount.....")
  }
  componentDidUpdate() {
    console.log("I just updated~!")
  }
  componentWillUnmount() {
    console.log("Good bye... my friend.....")
  }


  render() {
    console.log("yes! That's me! I am render!")
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
