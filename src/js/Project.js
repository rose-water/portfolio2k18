import React, { Component } from 'react';
import '../css/Project.css';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

class Project extends Component {
  render() {
    const name        = this.props.name;
    const description = this.props.description;
    const projectId   = this.props.id;
    
    // Grid view
    return (
      <div className="content-grid-item">
        <div class='hero-container'>
          <Link to={`/work/${ projectId }`}>
            {
              projectId === "placeholder" ? null : 
              <LazyLoad>
                
                  <img 
                    alt={ projectId }className="project-img-grid" 
                    src={ require(`../assets/projects/${ projectId }.png`).default }>
                  </img>

              </LazyLoad>
            }
          </Link>
        </div>

        <div className="project-meta-container">
          <Link className="project-name project-link" to={`/work/${ projectId }`}>{ name }</Link>
          <div className="project-desc-container">
            <div className="upper-section">
              <p className="project-desc">Client: JPL + NASA</p>
              <p className="project-desc">Dates: 2020 + 2021</p>
              <p className="project-desc">Collaborators: Me and myself</p>
            </div>
            <p className="project-desc">{ description.replace("\\n", "\n") }</p>
            <Link to={`/work/${ projectId }`}>
              <div className='readMore'>{'read more >>'}</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;