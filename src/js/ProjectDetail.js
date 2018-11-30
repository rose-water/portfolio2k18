import React, { Component } from 'react';
import projects from './data.js';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import backIcon from '../assets/arrow.svg';

class ProjectDetail extends Component {

  constructor(props) {
    super(props);

    const { projectId } = props.match.params;
    let projectDetails = {};
    for (let i=0; i<projects.length; i++) {
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

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  createVidMarkup() {
    let test = `<iframe src="https://player.vimeo.com/video/303633620?title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe><script src="https://player.vimeo.com/api/player.js"></script>`;

    return {__html: test};
  }

  render() {
    
    return(
      <div className="project inner-page-container" key={ this.state.projectDetails.id }>
        <div className="back-icon">
          <Link to="/work" >
            <img id="ig-logo" alt="ig-logo" src={ backIcon }></img>
          </Link>
        </div> 
        <div className="project-detail-container">
        <h1 className="page-header-label">{ this.state.projectDetails.name }</h1>
          <div className="project-content">
            {
              this.state.projectDetails.content.map((para, index) => {
                return <p key={ 'p-' + index }>
                  { para }  
                </p>
              })
            }
            { this.state.projectDetails.url === "" ? null : 
              <a href={ this.state.projectDetails.url } target="_blank">
                <div className="project-detail-link">Project Website</div>
              </a>
            }
            {
              this.state.projectDetails.name === "cepheids" ?
              <div className="vid" dangerouslySetInnerHTML={ this.createVidMarkup() } >
              </div> :
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