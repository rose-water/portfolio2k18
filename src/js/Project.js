import React, { Component } from 'react';
import '../css/Project.css'; 

class Project extends Component {
  render() {
    const name        = this.props.name;
    const description = this.props.description;
    const projectId   = this.props.id;
    
    // List view
    // return (
    //   <div className="work-page-content list">
    //     <div className="project-container">
    //       <div className="project-img">
    //         <img 
    //           className="project-highlight" 
    //           src={ require('../assets/projects/' + projectId + '.png') } 
    //           alt={ projectId } 
    //           height="auto">
    //         </img>
    //       </div>
    //       <div className="project-meta">
    //         <div className="project-name">
    //           { name }
    //         </div>
    //         <div className="project-description">
    //           <p>{ description }</p>
    //         </div>
    //       </div>
    //     </div>  
    //   </div>    
    // );

    // Grid view
    return (
      <div className="content-grid-item">
        <img className="project-img-grid" src={ require('../assets/projects/' + projectId + '.png') }></img>
        <div className="project-meta-container">
          <a className="project-name project-link" href="">{ name }</a>
          <div className="project-desc-container">
            <p className="project-desc">{ description }</p>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Project;