import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Pattern from './Components/Trianglify/Trianglify';
import logo from './Assets/lastkwe.jpg';
import './App.css';

class App extends Component {

  state = {
    quote: 1
  }

  quotes = {
    arr: [
      "You make mistakes, but I don't have any regrets. I'm the kind of person who takes responsibility for it and deals with it. I learn from everything I do. I work very hard, I have so many things going on in my life. Get to know me and see who I am.",
      "We have a responsibility to help those around us and help others in need.",
      "Voting is our right, but it is also our responsibility because if we don't take the next step and elect leaders who are committed to building a better future for our kids, other rights - our rights to clean air, clean water, health, and prosperity - are placed directly in harm's way.",
      "Governments that block the aspirations of their people, that steal or are corrupt, that oppress and torture or that deny freedom of expression and human rights should bear in mind that they will find it increasingly hard to escape the judgement of their own people, or where warranted, the reach of international law."
    ]
  }

  componentDidMount() {
    document.title = "Kwechete Last | Portfolio!";

    setInterval(() => {
      const quoteIndex = Math.floor(Math.random()*this.quotes.arr.length);
      this.setState({quote: quoteIndex})
    }, 10000)
  }

  render() {
    return (
      <Router>

        <div className="App">

        <nav>
          <button className="pull-right">Hire Me!</button>
        </nav>

        <Route path="/" render={
          () => {
            return (
              <React.Fragment>
              <header className="App-header">
    
                <Pattern/>

                <div style={{zIndex: 1}}>

                  <div className="currents">
                    <h2>Working On?</h2>
                    <hr style={{backgroundColor: 'white'}}/>

                    <ul style={{fontSize: "2vh"}}>
                      <li>Klast Academy</li>
                      <li>QuestDea</li>
                      <li>UNIfrica</li>
                    </ul>
                    <br/>

                    <h2>__" - "__ <em>quotes</em></h2>
                    
                    <p> {this.quotes.arr[this.state.quote]} </p>

                  </div>

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
                        <strong>Biography</strong><br/><span style={{fontSize: '1.8vh'}}>Passionate on programming, enthusiastic on technology and striving on problem solving. I always look for a better way of doing things. 
                        I'm the kind of person who takes responsibilities and work very hard for the best outcome.</span> 
                      </p>
                    </div>

                  </div>

                </div>
                
              </header>

              <section className="App-section" >
                <div className="about">

                </div>
              </section>
            </React.Fragment>
            );
          }
        } />

        </div>
      </Router>
    );
  }
}

export default App;
