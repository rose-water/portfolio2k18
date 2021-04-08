import React, { Component } from 'react';
import projects from './data.js';
import Project from './Project'
import Nav from './Nav';
import { ReactComponent as ListInactive } from '../assets/list-inactive.svg';
import { ReactComponent as ListActive } from '../assets/list-active.svg';
import { ReactComponent as GridInactive } from '../assets/grid-inactive.svg';
import { ReactComponent as GridActive } from '../assets/grid-active.svg';
import '../css/Project.css'; 

class Work extends Component {

  // ------------------------------------------------------
  constructor(props) {
    super(props);

    this.state = {
      currentFilter: 'all',
      currentView: 'list'
    }
  }

  // ------------------------------------------------------
  checkTypes(proj) {
    return proj.types.indexOf(this.state.currentFilter) > -1;
  }

  // ------------------------------------------------------
  renderProjects() {
    return projects.map((project, idx) => {
      return (
        <div className={`content-item-outer ${ this.state.currentView } ${ this.state.currentFilter !== 'all' && !this.checkTypes(project) ? 'inactive' : ''}` } key={ 'project-' + project.name + '-' + idx }>
          <Project
            currentFilter={ this.state.currentFilter } 
            currentView={ this.state.currentView } 
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

          {/* PROJECT FILTERS */}
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

          {/* GRID OR LIST */}
          <div className='grid-list-icons'>

            <div 
              id='icon-list'
              className={ this.state.currentView == 'list' ? 'active' : '' }
              onClick={ () => { this.setState({ currentView : 'list'}) } }
            >
              { this.state.currentView == 'list' ? <ListActive /> : <ListInactive /> }
            </div>

            <div 
              id='icon-grid' 
              className={ this.state.currentView == 'grid' ? 'active' : '' }
              onClick={ () => { this.setState({ currentView : 'grid'}) } }
            >
              { this.state.currentView == 'grid' ? <GridActive /> : <GridInactive /> }
            </div>  

          </div>

        </div>
          
     
        <div id='projects' className={`projects-view-${ this.state.currentView }`}>
          { this.renderProjects() }
        </div>
      </>
    );
  }
}
  
export default Work;