import React, { Component } from 'react';
import projects from './data.js';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import backIcon from '../assets/arrow.svg';
import Nav from './Nav';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class ProjectDetail extends Component {

  // ------------------------------------------------------
  constructor(props) {
    super(props);

    const { projectId } = props.match.params;
    let projectDetails = {};
    for (let i = 0; i < projects.length; i++) {
      
      // TODO: make filter return an object instead of assigning it directly
      projects.filter(project => {
        if ( project.id === projectId ) {
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
      <>

        <Nav />
        <div className="project inner-page-container" key={ this.state.projectDetails.id }>
        
          {/* Back button */}
          <Link to="/work">
            <div className='back-header'>
              {/* <Link to="/work"> */}
                <img className="back-arrow-icon" src={ backIcon } />
              {/* </Link> */}
              <span className="back-label">Back to projects</span>
            </div>
          </Link>

          {/* Project content details */}
          <div className="project-content-container">

            {/* HEADER */}
            <div className="project-detail-header">
              <h1 className="project-detail-name">{ this.state.projectDetails.name }</h1>
              <h3 className="project-detail-client">
                {
                  this.state.projectDetails.client &&
                  this.state.projectDetails.client !== '' ? 
                  this.state.projectDetails.client : 'self-directed'
                } / { this.state.projectDetails.years }
              </h3>
              {/* { this.state.projectDetails.url === "" ? null : 
                <a 
                  href={ this.state.projectDetails.url } 
                  target="_blank"
                  rel="noopener noreferrer">
                  <div className="project-detail-link">Project Website</div>
                </a>
              } */}
            </div>

            {/*  */}
            <div className="project-content">

              {/* VIDEO IF APPLICABLE */}
              {
                this.state.projectDetails.hasOwnProperty('videoEmbedUrl') && this.state.projectDetails.videoEmbedUrl !== "" ? 
                <div 
                  className={ "vid " + this.state.projectDetails.id } 
                  dangerouslySetInnerHTML={ this.renderInnerHtml(this.state.projectDetails.videoEmbedUrl) } 
                >
                </div> : null
              }
            
              {/* CONTENT IMAGES */}
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

              {/* TEXT CONTENT */}
              <div className="project-content-desc">
                {
                  this.state.projectDetails.hasOwnProperty('collaborators') && 
                  this.state.projectDetails['collaborators'] !== '' ? 

                  <p className='proj-collaborators'>
                    in collaboration with { this.state.projectDetails['collaborators'] }
                  </p> : null
                }
                
                <p className='project-desc' dangerouslySetInnerHTML={ this.renderInnerHtml(this.state.projectDetails.content) }></p>
              </div>

              {
                this.state.projectDetails.hasOwnProperty('carouselImgs') ? 
                <Carousel 
                  showArrows={ true } 
                  // onChange={ onChange } 
                  // onClickItem={ onClickItem } 
                  // onClickThumb={ onClickThumb }
                >
                  {
                    this.state.projectDetails['carouselImgs'].map((img, idx) => {
                      return (
                        <div>
                          <img src={ require(`../assets/projects/${this.state.projectDetails.id}/${img}`).default} />
                        </div>
                      )
                    })
                  }
                </Carousel> : null
              }
            </div>
          </div>
        </div>      
      </>
    );
  }
}

export default ProjectDetail;