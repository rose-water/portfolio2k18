import React, { Component } from 'react';
import projects from './data.js';

class ProjectDetail extends Component {

  constructor(props) {
    super(props);

    const { projectId } = props.match.params;
    this.state = {
      projectDetails: projects.filter(proj => {
        return proj.id === projectId;
      })[0]
    }

  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return(
      <div className="project inner-page-container" key={ this.state.projectDetails.id }>
        <div className="page-header">
          <h1 className="page-header-label">{ this.state.projectDetails.name }</h1>
        </div>
        <div className="project-detail-container">
          <div className="project-content">
            {
              this.state.projectDetails.content.map((para, index) => {
                return <p key={ 'p-' + index }>
                  { para }  
                </p>
              })
            }

            {
              this.state.projectDetails.imgs.map((img, index) => {
                return <img alt={ this.state.projectDetails.id } key={ this.state.projectDetails.id + '-img-' + index } className="proj-img" src={ require('../assets/projects/' + this.state.projectDetails.id + '/' + img + '.png')}></img>
              })
            }
          </div>
          
        </div>
        
      </div>
    );
  }
}

export default ProjectDetail;