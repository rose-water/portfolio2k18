import React, { Component } from 'react';
import '../css/Project.css';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

class Project extends Component {

  // ------------------------------------------------------
  renderInnerHtml(content) {
    return { __html: content };
  }

  // ------------------------------------------------------
  render() { 
    
    const proj = this.props.data;

    // Grid view
    return (
      <div className="content-grid-item">
        <div className='hero-container'>
          {/* <Link to={`/work/${ proj.id }`}>        */}
            <LazyLoad>
              <img 
                alt={ proj.id  }
                className="project-img-grid" 
                src={ require(`../assets/projects/${ proj.id  }.png`).default }>
              </img>
            </LazyLoad>
          {/* </Link> */}
        </div>

        <div className="project-meta-container">
          <div className="upper-section">
            {/* <Link 
              className="project-name project-link" 
              to={`/work/${ proj.id  }`} 
            > */}
              <span className="project-name project-link">{ proj.name }</span>
            {/* </Link>  */}
            <p className="project-client">
              {
                proj.hasOwnProperty('client') ? `${ proj.client } / ` : null
              }
              { proj.years }
            </p>
            
            
          </div>
          <div className="lower-section">
            
            <p className="project-desc" dangerouslySetInnerHTML={ this.renderInnerHtml(proj.description) }>
            </p>
  
            <div>
              <div className="line-deco"></div>
              {
                proj.hasOwnProperty('role') ? 
                <p className="project-role">role: { proj.role }</p> : null
              }
              { 
                proj.hasOwnProperty('tools') ? 
                <p className="project-tools">tools: { proj.tools }</p> : null 
              }
            </div>
            
            {/* <Link to={`/work/${ proj.id  }`}>
              <div className='readMore'>{'read more >>'}</div>
            </Link> */}
          </div> 
        </div>
      </div>
    );
  }
}

export default Project;