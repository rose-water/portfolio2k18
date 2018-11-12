import React, { Component } from 'react';
import '../css/Project.css'; 

class Project extends Component {
  render() {
    const name         = this.props.name;
    const description  = this.props.description;
    const url          = this.props.url;
    const highlightUrl = this.props.highlightUrl;
    
    return (
      <div className="work-page-content">
        <div className="project-container">
          <div className="project-img">
            <img className="project-highlight" src={`${highlightUrl}`} alt="propagator-highlight" height="auto"></img>
          </div>
          <div className="project-meta">
            <div className="project-name">
              {name}
            </div>
            <div className="project-description">
              <p>{description}</p>
            </div>
            <div className="project-tags">
            
            </div>
          </div>
        </div>  
      </div>    
    );
  }
}

export default Project;