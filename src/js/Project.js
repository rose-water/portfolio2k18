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
        <Link to={`/work/${ projectId }`}>
          {
            projectId === "placeholder" ? null : <LazyLoad>
            <img alt={ projectId }className="project-img-grid" 
            src={require(`../assets/projects/${projectId}.png`).default}></img>
          </LazyLoad>
          }
        </Link>
        <div className="project-meta-container">
          <Link className="project-name project-link" to={`/work/${ projectId }`}>{ name }</Link>
          <div className="project-desc-container">
            <p className="project-desc">{ description.replace("\\n", "\n") }</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;