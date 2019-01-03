import React, { Component } from 'react';
import './Projects.css';
import { projectData } from './ProjectData';


class Projects extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            Projects: projectData,
            num: 0
        };

        this.onMouseOver = this.onMouseOver.bind(this);
      }
    
      componentDidMount() {
        let proLength = this.state.Projects.length;
        proLength--;

        setInterval(() => {
            let proIndex = this.state.num;

            if( proIndex < proLength) {
                proIndex++;
                this.setState({num: proIndex})
            }else {
                this.setState({num: 0})
            }
        }, 3000);
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

                    <div className="Pro-preview col-4">
                        {
                            [Projects[this.state.num]].map((proj) => {
                                return(
                                    <div className="thumbnail" key={proj.id}>
                                        <div className="Preview-header">
                                            <img src={proj.img} alt={proj.name} />
                                            <strong>{proj.name}</strong> 
                                        </div>
                                        <div className="Pro-description"> 
                                            <p><strong>Started:</strong> {proj.started}</p>
                                            <p><strong>End:</strong> Ongoing</p>
                                            <p><strong>Project Type:</strong> {proj.protype}</p>
                                            <p><strong>Status:</strong> {proj.status}</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>

                    <div className="col-8">

                    <div className="row">
                        <React.Fragment>
                            {
                                Projects.map((proj) => {
                                    return (                                         
                                        <div key={proj.id} name={proj.id} className="project col-6">
                                            <div className="thumbnail">

                                                <div onMouseOver={this.onMouseOver} id={proj.id} className="overlay">
                                                    
                                                </div>

                                                <img className={proj.type} src={proj.img} alt={proj.name}/>
                                                <button className={`${"Pro-title"} ${'btn-'}${proj.type}`}>{proj.name}</button>

                                            </div>
                                        </div>
                                    );
                                })
                            }                        
                        </React.Fragment>
                    </div>

                    </div>

                </div>

            </div>
        );
    }

}
export default Projects;