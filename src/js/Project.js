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
        <div className='hero-container'>
          <Link to={`/work/${ proj.id }`}>       
            <LazyLoad>
              <img 
                alt={ proj.id  }
                className="project-img-grid" 
                src={ require(`../assets/projects/${ proj.id  }.png`).default }>
              </img>
            </LazyLoad>
          </Link>
        </div>

        <div className="project-meta-container">
          <div className="upper-section">
            <Link 
              className="project-name project-link" 
              to={`/work/${ proj.id  }`}
            >
              { proj.name }
            </Link>
            <p className="project-client">{ proj.client }</p>
            <p className="project-years">{ proj.years }</p>
            <p className="project-collaborators">{ proj.collaborators }</p>
            <div className="line-deco"></div>
          </div>
          <div className="lower-section">
            <p className="project-desc">
              { proj.description.replace("\\n", "\n") }
              { 
                proj.hasOwnProperty('exhibitions') ?
                <div>
                  <span>Exhibited at:</span>
                  <ul>
                    {
                      proj.exhibitions.map((exh, idx) => {
                        return <li key={`exh-${idx}`}>{ exh }</li>
                      })
                    }
                  </ul>
                  </div>: null
              }
            </p>
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