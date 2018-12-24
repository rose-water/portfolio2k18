import React, { Component } from 'react';
import projects from './data.js';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import backIcon from '../assets/arrow.svg';

class ProjectDetail extends Component {

  // ------------------------------------------------------
  constructor(props) {
    super(props);

    const { projectId } = props.match.params;
    let projectDetails = {};
    for (let i = 0; i < projects.length; i++) {
      // TODO: make filter return an object instead of assigning it directly
      projects[i].projects.filter(project => {
        if(project.id === projectId) {
          projectDetails = project;
        }
      });
    }
    this.state = {
      projectDetails
    }
  }

  // ------------------------------------------------------
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  // ------------------------------------------------------
  renderInnerHtml(content) {
    return { __html: content };
  }

  // ------------------------------------------------------
  render() {
    return(
      <div className="project inner-page-container" key={ this.state.projectDetails.id }>
        
        <div className="project-detail-container">
          <div className="project-detail-header">
            <h1 className="page-header-label">{ this.state.projectDetails.name }</h1>
            { this.state.projectDetails.url === "" ? null : 
              <a 
                href={ this.state.projectDetails.url } 
                target="_blank"
                rel="noopener noreferrer">
                <div className="project-detail-link">Project Website</div>
              </a>
            }
          </div>
          <div className="project-content">
            {
              this.state.projectDetails.videoEmbedUrl !== "" ? 
              <div className={ "vid " + this.state.projectDetails.id } dangerouslySetInnerHTML={ this.renderInnerHtml(this.state.projectDetails.videoEmbedUrl) } >
              </div> : null
            }
            <p dangerouslySetInnerHTML={ this.renderInnerHtml(this.state.projectDetails.content) }></p>
            {
              this.state.projectDetails.imgs.map((img, index) => {
                return (
                  <LazyLoad key={ this.state.projectDetails.id + '-img-' + index }>
                    <img alt={ this.state.projectDetails.id } key={ this.state.projectDetails.id + '-img-' + index } className="proj-img" src={ require('../assets/projects/' + this.state.projectDetails.id + '/' + img)}></img>
                  </LazyLoad>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetail;