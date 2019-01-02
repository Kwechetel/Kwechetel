import React, { Component } from 'react';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Pattern from '../Trianglify/Trianglify';
import logo from '../../Assets/lastkwe.jpg';
import './Header.css'

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

            <div style={{zIndex: 1}}>

              <div id="user" className="row">

                <div className='mypic col-4'>
                  <img src={logo} alt='mypic'/>
                </div>

                <div className='col-8'>
                  <p className="full-name"><strong>LAST KWECHETE</strong></p>                 
                  <p><strong>SKILLS:</strong> UI/XU DESIGNER | FULLSTACK DEVELOPER | GRAGHICS DESIGNER | API DEVELOPER</p>
                  <p><strong>PROGRAMMING:</strong> HTML/CSS | JAVASCRIPT | REACT | PHP</p>
                  <hr/>
                  <p>
                    <strong>Biography</strong><br/><span style={{fontSize: '1.8vh'}}>Passionate programmer, enthusiastic on new technologies and striving on problem solving. I always look for a better way of doing things. 
                    I'm the kind of person who takes responsibilities and work very hard for the best outcome.</span> 
                  </p>
                </div>

              </div>
              
              <Link to="about" spy={true} smooth={true} duration={500}><button className={` ${"bounce"} ${this.state.classNode} `}><FontAwesomeIcon icon="angle-down"/></button></Link>

            </div>
            
          </header>
        );
    }

}
export default Header;