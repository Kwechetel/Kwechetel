import React, { Component } from 'react';
import './AboutSkills.css';
//import WorkingOn from '../WorkingOn/WorkingOn';

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

              <div className="About-header">
                <h1>Skills</h1>
                <p>
                    My passion towards programming is limitless, I'm very curious about new technologies
                    and courageous problem solver. I'm very comfortable working with react in front-end 
                    and php OOP with slim micro framework in back-end.   
                </p>
              </div>

              <table>
                  <tbody>
                    <tr>
                        <td className="Td-title">
                            <h2>Front-End Skills</h2>
                        </td>
                        <td>
                            <ul>
                                <li>UI/UX DESIGNER</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>jQuery</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td className="Td-title">
                            <h2>Back-End Skills</h2>
                        </td>
                        <td>
                            <ul>
                                <li>PHP</li>
                                <li>RESTful API</li>
                                <li>JWT Web Token</li>
                                <li>SQL</li>
                                <li>MySQL</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td className="Td-title">
                            <h2>VCS Tools</h2>
                        </td>
                        <td>
                            <ul>
                                <li>Git</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td className="Td-title">
                            <h2>Graghics Tools</h2>
                        </td>
                        <td>
                            <ul>
                                <li>Adobe XD</li>
                                <li>Adobe AI</li>
                                <li>Adobe Photoshop</li>
                                <li>Inkscape</li>
                            </ul> 
                        </td>
                    </tr>

                    <tr>
                        <td style={{border: 'none'}} className="Td-title">
                            <h2>Languages</h2>
                        </td>
                        <td style={{border: 'none'}}>
                            <ul>
                                <li>English</li>
                                <li>Shona (Native)</li>
                            </ul>
                        </td>
                    </tr>

                  </tbody>
                  
              </table>

            </div>
        );
    }

}
export default AboutSkills;