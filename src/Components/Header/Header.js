import React, { Component } from 'react';
import { Link } from "react-scroll";

import Pattern from '../Trianglify/Trianglify';
import logo from '../../Assets/lastkwe.jpg';
import './Header.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faFacebookSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faFacebookSquare, faTwitterSquare, faLinkedin);

class Header extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            classNode: 'addClass'
        };

        this.handleScroll = this.handleScroll.bind(this);
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
      componentWillUnmount() {
        window.addEventListener('scroll', this.handleScroll);
      }
    
      handleScroll = (event) => {
    
        const pageScrllTop = window.pageYOffset;
        //console.log(this.container.scrollTop);
    
        if (pageScrllTop < 80) {
            this.setState({classNode: 'addClass'});
    
        } else {
          
          this.setState({classNode: 'removeClass'});
    
        }
        
      }

    render() {
        return(
            <header ref={ el => this.container = el} className="App-header">
      
            <Pattern/>

            <div className="App-container" style={{zIndex: 1}}>

              <div id="user" className="row">

                <div className='mypic col-4'>
                  <div className="photo">
                    <img src={logo} alt='mypic'/>
                  </div>
                </div>

                <div className='col-8'>
                  <div style={{margin: "1vh 2vh"}}>
                    <p className="full-name"><strong>LAST KWECHETE</strong></p>                 
                    <p><strong>SKILLS:</strong> UI/UX DESIGNER | FULLSTACK DEVELOPER | GRAGHICS DESIGNER | RESTful API DEVELOPER</p>
                    <hr/>
                    <p>
                      <strong>Biography</strong><br/><span style={{fontSize: '1.8vh'}}>Passionate programmer, enthusiastic on new technologies and striving on problem solving. I always look for a better way of doing things. 
                      I'm the kind of person who takes responsibilities and work very hard for the best outcome.</span> 
                    </p>
                  </div>
                </div>

              </div>
              <div className="social-network">

                <a href='https://www.facebook.com/kwechetel' target='_blank' rel="noopener noreferrer" ><button><FontAwesomeIcon icon={faFacebookSquare}/></button></a>
                <a href='https://twitter.com/kwechetel' target='_blank' rel="noopener noreferrer" ><button><FontAwesomeIcon icon={faTwitterSquare}/></button></a>
                <a href='https://www.linkedin.com/in/last-kwechete-82ab10a4/' target='_blank' rel="noopener noreferrer" ><button><FontAwesomeIcon icon={faLinkedin}/></button></a>
                
              </div>
              
              <Link to="about" spy={true} smooth={true} duration={500}><button className={` ${"bounce"} ${this.state.classNode} `}><FontAwesomeIcon icon="angle-down"/></button></Link>

            </div>
            
          </header>
        );
    }

}
export default Header;