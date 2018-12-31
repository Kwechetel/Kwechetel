import React, { Component } from 'react';
import Trianglify from 'trianglify';
//import logo from './logo.svg';
import './App.css';

const pattern = Trianglify({
  width: window.innerWidth,
  height: window.innerHeight
});

class App extends Component {

  componentDidMount() {
    //document.querySelector('.App-header');

    document.querySelector('.pattern').appendChild(pattern.canvas());
  }

  changePattern() {
    document.querySelector('.pattern').appendChild(pattern.canvas());
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <div className="pattern" style={{height: `${100} ${'%'}`}}></div>

          <button style={{zIndex: 1}} onClick={this.changePattern}>Click</button>
          
        </header>
      </div>
    );
  }
}

export default App;
