import React, { Component } from 'react';
import './AboutSkills.css';
import WorkingOn from '../WorkingOn/WorkingOn';

class AboutSkills extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
        };
      }
    
      componentDidMount() {
    
      }

    render() {
        return(
            <div id="about" className="About">

              <WorkingOn/>

              <div className="About-header">
                <h1>Skills</h1>
                <p>
                    My passion towards programming is limitless, I'm very curious about new technologies
                    and courageous problem solver. I'm very comfortable working with react in front-end 
                    and php OOP with slim micro framework in back-end.   
                </p>
              </div>
              
              <div className="row">

                <div className="Front-End">
                    <div className="col-4">
                        <h2>Front-End Skills</h2>
                    </div>

                    <div className="col-8">
                        <ul>
                            <li>UI/UX DESIGNER</li>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>jQuery</li>
                        </ul>
                    </div>
                </div>

                <hr/>

                <div className="Back-End">
                    <div className="col-4">
                        <h2>Back-End Skills</h2>
                    </div>

                    <div className="col-8">
                        <ul>
                            <li>PHP</li>
                            <li>RESTful API</li>
                            <li>JWT Web Token</li>
                            <li>SQL</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                </div>

                <hr/>

                <div className="tools">
                    <div className="col-4">
                        <h2>Version Control Systems</h2>
                    </div>

                    <div className="col-8">
                        <ul>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>

                <hr/>

                <div className="tools">
                    <div className="col-4">
                        <h2>Graghics Tools</h2>
                    </div>

                    <div className="col-8">
                        <ul>
                            <li>Adobe XD</li>
                            <li>Adobe AI</li>
                            <li>Adobe Photoshop</li>
                            <li>Inkscape</li>
                        </ul>
                    </div>
                </div>

                <hr/>

                <div className="languages">
                    <div className="col-4">
                        <h2>Languages</h2>
                    </div>

                    <div className="col-8">
                        <ul>
                            <li>English</li>
                            <li>Shona (Native)</li>
                        </ul>
                    </div>
                </div>

              </div>

            </div>
        );
    }

}
export default AboutSkills;