import React, { Component } from 'react';
import projects from './data.js';
import Project from './Project'
import '../css/Project.css'; 

class Work extends Component {

  renderProjectSections(projects) {
    return projects.map(workSection => {
      return (
        <div className="work inner-page-container" key={workSection.workType}>
          <div className="page-header work">
            <h1 className="page-header-label">{ workSection.workType }</h1>
          </div>
          <div className="projects-container">
            { this.renderProjects(workSection.projects) }
          </div>
        </div>
      );
    });
  }

  renderProjects(projects) {
    return projects.map(project => {
      
      return (
        <div className={`content-grid-item-outer ${ project.id === "placeholder" ? "placeholder" : null }`} key={ project.name }>
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
          <div key={ Math.random() }>
            { this.renderProjectSections(projects) }
          </div>
        );
      }
    }
    
    export default Work;