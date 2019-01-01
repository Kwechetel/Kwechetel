import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Pattern from './Components/Trianglify/Trianglify';
import Quotes from './Components/Quotes/Quotes';
import WorkingOn from './Components/WorkingOn/WorkingOn';


import logo from './Assets/lastkwe.jpg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      NavPosition: "notFixed"
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    document.title = "Kwechete Last | Portfolio!";

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    //console.log(event);
    
    //console.log(event.path[1].pageYOffset);
    console.log(window.pageYOffset);

    const pageScrllTop = window.pageYOffset;

    if (pageScrllTop > 80) {

      this.setState({NavPosition: 'fixedClass'});

    } else {
      
      this.setState({NavPosition: 'notFixed'});

    }
    
  }

  render() {
    return (
      <Router>

        <div className="App">

          <nav className={this.state.NavPosition}>
            <button className="pull-right">Hire Me!</button>
          </nav>

          <Route path="/" render={
            () => {
              return (
                <React.Fragment>
                <header className="App-header">
      
                  <Pattern/>

                  <div style={{zIndex: 1}}>

                    <div className="row">

                      <div className='mypic col-4'>
                        <img src={logo} alt='mypic'/>
                      </div>

                      <div className='col-8'>
                        <p className="full-name"><strong>LAST KWECHETE</strong></p>                 
                        <p><strong>SKILLS:</strong> UI/XU DESIGNER | FULLSTACK DEVELOPER | GRAGHICS DESIGNER | API DEVELOPER</p>
                        <p><strong>PROGRAMMING:</strong> HTML/CSS | JAVASCRIPT | REACT | PHP</p>
                        <hr/>
                        <p>
                          <strong>Biography</strong><br/><span style={{fontSize: '1.8vh'}}>Passionate on programming, enthusiastic on new technologies and striving on problem solving. I always look for a better way of doing things. 
                          I'm the kind of person who takes responsibilities and work very hard for the best outcome.</span> 
                        </p>
                      </div>

                    </div>
                    <div className="Social-network">
                      <button></button>
                    </div>

                  </div>
                  
                </header>

              </React.Fragment>
              );
            }
          } />

          <section className="App-section" >
            
            <div className="about">
              <WorkingOn/>
            </div>
          </section>

          <footer>
            <div className="row">

              <div className="col-4">
                <Quotes/>
              </div>

              <div className="col-8">
              
              </div>

            </div>
          </footer>

        </div>
      </Router>
    );
  }
}

export default App;
