import React, { Component } from 'react';
import projects from './data.js';

class ProjectDetail extends Component {
  componentWillMount() {
    const { projectId } = this.props.match.params;
    this.projectDetails = projects.filter(proj => {
      return proj.id === projectId;
    })[0];
  }

  render() {
    return(
      <div> 
        <li> Name: { this.projectDetails.name } </li>
        <li> Description: { this.projectDetails.description } </li>
        <li> <img className="project-img-grid" src={ require('../assets/projects/' + this.projectDetails.id + '.png') }></img> </li>
      </div>
    );
  }
}

export default ProjectDetail;