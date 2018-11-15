import React, { Component } from 'react';
import projects from './data.js';
import Project from './Project'
import '../css/Project.css'; 

class Work extends Component {

  renderProjects(projects) {
    return projects.map(project => {
      return (
        <div key={ project.name }>
          <Project 
            name={ project.name } 
            id={ project.id }
            description={ project.description } 
            highlightUrl={ project.highlightUrl }
          />
        </div>
      );
    });
  }

  render() {
    return (
      <div id="work" className="inner-page-container">
        <div className="page-header">
          <h1 className="page-header-label">WORK</h1>
          <div className="page-header-divider"></div>
        </div>
        { this.renderProjects(projects) }     
      </div>
    );
  }
}

export default Work;