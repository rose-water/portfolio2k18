import React, { Component } from 'react';
import '../css/Project.css';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

class Project extends Component {
  render() { 
    
    const proj = this.props.data;

    // Grid view
    return (
      <div className="content-grid-item">
        <div class='hero-container'>
          <Link to={`/work/${ proj.id }`}>       
            <LazyLoad>
              <img 
                alt={ proj.id  }className="project-img-grid" 
                src={ require(`../assets/projects/${ proj.id  }.png`).default }>
              </img>
            </LazyLoad>
          </Link>
        </div>

        <div className="project-meta-container">
          <Link className="project-name project-link" to={`/work/${ proj.id  }`}>{ proj.name }</Link>
          <div className="project-desc-container">
            <div className="upper-section">
              <p className="project-client">{ proj.client } </p>
              <p className="project-years">{ proj.years }</p>
              <p className="project-collaborators">{ proj.collaborators }</p>
            </div>
            <p className="project-desc">{ proj.description.replace("\\n", "\n") }</p>
            <Link to={`/work/${ proj.id  }`}>
              <div className='readMore'>{'read more >>'}</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;