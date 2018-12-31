import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Pattern from './Components/Trianglify/Trianglify';
import logo from './Assets/lastkwe.jpg';
import './App.css';

class App extends Component {

  componentDidMount() {
    document.title = "Kwechetel | Welcome!";
  }

  render() {
    return (
      <Router>
        <Route path="/" render={
          () => {
            return (
              <div className="App">
              <header className="App-header">
    
                <Pattern/>

                <div style={{zIndex: 1}}>
                  <div className='mypic'><img src={logo} alt='mypic'/></div>                  
                  <Link to="/">
                    <button onClick={this.changePattern}>Click Me</button>
                  </Link>
                </div>
                
              </header>
            </div>
            );
          }
        } />
      </Router>
    );
  }
}

export default App;
