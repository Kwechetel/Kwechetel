import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import Quotes from './Components/Quotes/Quotes';
import AboutSkills from './Components/AboutSkills/AboutSkills';
import Projects from './Components/Projects/Projects';

import Header from './Components/Header/Header';

import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { fab, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faAngleDown, faFacebookSquare);

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

    //window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    //window.addEventListener('scroll', this.handleScroll);
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
                <Header/>
              );
            }
          } />

          <section className="App-section" >
            
            <AboutSkills/>
            <Projects/>
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
