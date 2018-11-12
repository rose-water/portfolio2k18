import React, { Component } from 'react';
import projects from './data.js';
import '../css/Project.css'; 

class Work extends Component {
  render() {
    console.log('projects: ', projects);
    return (
      <div id="work" className="inner-page-container">
        <div className="page-header">
          <h1 className="page-header-label">WORK</h1>
          <div className="page-header-divider"></div>
        </div>
        <div className="work-page-content">

          { /* Replace with components */ }
          <div className="project-container">
            <div className="project-img">
              <img className="project-highlight" src="/assets/projects/propagator.png" alt="propagator-highlight" height="auto"></img>
            </div>
            <div className="project-meta">
              <div className="project-name">
                Propagator
              </div>
              <div className="project-description">
                <p>A handmade zine created by a network of peers working across various creative disciplines looking to expand their art, design, and research practices.</p>
              </div>
              <div className="project-tags">
                
              </div>
            </div>
          </div>

        
        </div>
      </div>
    );
  }
}

export default Work;