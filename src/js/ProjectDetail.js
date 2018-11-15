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
      <div className="project inner-page-container" key={ this.projectDetails.id }>
        <div className="page-header">
          <h1 className="page-header-label">{ this.projectDetails.name }</h1>
        </div>
        <div className="project-detail-container">
          <div className="project-content">
            {
              this.projectDetails.content.map( para => {
                return <p>
                  { para }
                </p>
              })
            }

            {
              this.projectDetails.imgs.map(img => {
                return <img className="proj-img" src={ require('../assets/projects/' + this.projectDetails.id + '/' + img + '.png')}></img>
              })
            }
          </div>
          
        </div>
        
      </div>
    );
  }
}

export default ProjectDetail;