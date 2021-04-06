import React, { Component } from 'react';
import projects from './data.js';
import Project from './Project'
import Nav from './Nav';
import '../css/Project.css'; 

class Work extends Component {

  // ------------------------------------------------------
  constructor(props) {
    super(props);

    this.state = {
      currentFilter: 'all',
      filteredProjects: projects
    }
  }

  // ------------------------------------------------------
  renderProjects() {
    return this.state.filteredProjects.map((project, idx) => {
      return (
        <div className={`content-grid-item-outer`} key={ 'project-' + project.name + '-' + idx }>
          <Project 
            data={ project }
          />
        </div>
      );
    });
  }
  
  // ------------------------------------------------------
  selectProjectType(type) {
    this.setState({
      currentFilter: type,
      filteredProjects: this.filterProjectsByType(type)
    });
  }

  // ------------------------------------------------------
  filterProjectsByType(type) {
    if (type == 'all') {
      return projects;
    }
    return projects.filter(proj => {
      return proj.types.indexOf(type) > -1;
    });
  }

  
  // ------------------------------------------------------
  render() {
    return (
      <>
        <Nav />
        <div id='project-filters-container'>
          <ul id='project-filters'>
            <li 
              className={`project-filter ${ this.state.currentFilter == 'all' ? 'active' : ''}`}
              onClick={ () => { this.selectProjectType('all') } }
            >
              All Projects
            </li>
            <li 
              className={`project-filter ${ this.state.currentFilter == 'web' ? 'active' : ''}`}
              onClick={ () => { this.selectProjectType('web') } }
            >
              Web Design + Dev
            </li>
            <li 
              className={`project-filter ${ this.state.currentFilter == 'media art' ? 'active' : ''}`}
              onClick={ () => { this.selectProjectType('media art') } }
            >
              Media Art
            </li>
            <li 
              className={`project-filter ${ this.state.currentFilter == 'speculative' ? 'active' : ''}`}
              onClick={ () => { this.selectProjectType('speculative') } }
            >
              Speculative Design
            </li>
          </ul>
        </div>
        <div id='projects'>
          { this.renderProjects() }
        </div>
      </>
    );
  }
}
  
export default Work;