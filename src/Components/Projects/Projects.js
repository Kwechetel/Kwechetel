import React, { Component } from 'react';
import './Projects.css';

//projects
import portfolio from '../../Assets/projects/portfolio/portfolio.PNG'; 
import klast from '../../Assets/projects/klast/klast.svg';
import unifrica from '../../Assets/projects/unifrica/unifrica.svg';
import questdea from '../../Assets/projects/questdea/questdea.svg';

class Projects extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            Projects: [
                {'id': 'pro-0', 'name': 'Klast Academy', 'img': klast, 'type': 'logo'},
                {'id': 'pro-1', 'name': 'UNIfrica Org', 'img': unifrica, 'type': 'logo'},
                {'id': 'pro-2', 'name': 'QuestDea', 'img': questdea, 'type': 'logo'},
                {'id': 'pro-3', 'name': 'Klast Academy', 'img': portfolio, 'type': 'cover'}
            ]
        };

        this.onMouseOver = this.onMouseOver.bind(this);
      }
    
      componentDidMount() {
    
      }
      onMouseOver(e) {
          console.log(e.target.id);
      }

    render() {
        const Projects = this.state.Projects;
        return(
            <div className="Projects">
                <div className="Projects-header">
                    <h1>Projects</h1>
                </div>
              
                <div className="row">

                    <div className="Front-End">
                        <React.Fragment>
                            {
                                Projects.map((proj) => {
                                    return ( 
                                        <div key={proj.id} name={proj.id} className="project col-4">
                                            <div className="thumbnail">

                                                <div onMouseOver={this.onMouseOver} id={proj.id} className="overlay">
                                                    <strong>{proj.name}</strong>
                                                </div>
                                                
                                                <img className={proj.type} src={proj.img} alt={proj.name}/>

                                            </div>
                                        </div>
                                    );
                                })
                            }                        
                        </React.Fragment>
                    </div>

                </div>

            </div>
        );
    }

}
export default Projects;