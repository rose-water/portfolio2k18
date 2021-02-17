import React, { Component } from 'react';
import projects from './data.js';
import Project from './Project'
import Nav from './Nav';
import '../css/Project.css'; 

class Work extends Component {

  renderProjectSections(projects) {
    return projects.map((workSection, index) => {
      return (
        <div className="projects-container" key={ 'worksection-' + index }>
          { this.renderProjects(workSection.projects) }
        </div>
      );
    });
  }

  renderProjects(projects) {
    return projects.map((project, index) => {
      return (
        <div className={`content-grid-item-outer`} key={ project.name }>
          <Project 
            data={ project }
          />
        </div>
      );
    });
  }
    
  render() {
    return (
      <>
        <Nav />
        <div id='projects'>
          { this.renderProjectSections(projects) }
        </div>
      </>
    );
  }
}
  
export default Work;