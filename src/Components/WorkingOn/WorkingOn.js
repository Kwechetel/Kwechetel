import React, { Component } from 'react';
import './WorkingOn.css'

class WorkingOn extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            NavPosition: 'notFixed'
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
    
        if (pageScrllTop > 867) {
    
          this.setState({NavPosition: 'fixedClass'});
    
        } else {
          
          this.setState({NavPosition: 'notFixed'});
    
        }
        
      }

    render() {
        return(
            <div className="WorkingOn">
                <div className={` ${'CurrentWork'} ${this.state.NavPosition} `}>
                    <h2>Working On?</h2>
                    <hr style={{backgroundColor: 'white'}}/>

                    <ul style={{fontSize: "2vh"}}>
                    <li>Klast Academy</li>
                    <li>QuestDea</li>
                    <li>UNIfrica</li>
                    </ul>

                </div>
            </div>
        );
    }

}
export default WorkingOn;