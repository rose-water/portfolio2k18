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
    return (
      <div className="project inner-page-container" key={ this.state.projectDetails.id }>
        
        <div className="project-detail-container">
          {/* <div>
            <Link to="/work">
              <img className="back-arrow-icon" src={ backIcon } />
            </Link>
          </div> */}
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
  
              <div className="project-content-desc">
                <p dangerouslySetInnerHTML={ this.renderInnerHtml(this.state.projectDetails.content) }></p>
              </div>

              {/* {
                this.state.projectDetails.hasOwnProperty("tools") ?
                <div className="project-content-tools">
                  TOOLS
                  <ul>
                    {
                      this.state.projectDetails.tools.map((tool, index) => {
                        return (
                          <li key={ tool+'-'+index }>{ tool }</li>
                        )
                      })
                    }
                  </ul>
                </div> : null
              } */}

            {
              this.state.projectDetails.videoEmbedUrl !== "" ? 
              <div className={ "vid " + this.state.projectDetails.id } dangerouslySetInnerHTML={ this.renderInnerHtml(this.state.projectDetails.videoEmbedUrl) } >
              </div> : null
            }

            <div className="project-content-imgs">
              {
                this.state.projectDetails.imgs.map((img, index) => {
                  return (
                    <LazyLoad 
                      className={ this.state.projectDetails.imgs.length > 1 ? "proj-img-container half" : "proj-img-container full" }  
                      key={ this.state.projectDetails.id + '-img-' + index }>
                      <img 
                        alt={ this.state.projectDetails.id } 
                        key={ this.state.projectDetails.id + '-img-' + index } 
                        className="proj-img"
                        // src={ require('../assets/projects/' + this.state.projectDetails.id + '/' + img)}></img>
                        src={require(`../assets/projects/${this.state.projectDetails.id}/${img}`).default}></img>
                    </LazyLoad>
                  )
                })
              }
            </div>

            {
              this.state.projectDetails.hasOwnProperty("publications") ?
              <div className="project-content-pubs">
                PUBLICATIONS
                <ul>
                  { 
                    this.state.projectDetails.publications.map((pub, index) => {
                      return (
                        <li>{ pub }</li>
                      )
                    })
                  }
                </ul>
              </div> : null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDetail;