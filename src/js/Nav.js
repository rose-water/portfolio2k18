import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import '../css/Nav.css';

class Nav extends Component { 
  render() {
    return (
      <div className="nav">
        {
          window.location.pathname !== '/' ? 
          <div id="name-label">
            <Link to="/">RACHEL ROSE</Link>
            <Link to="/">WATERHOUSE</Link>
            <div id='descriptors'>
              technologist, artist + designer
            </div>
          </div> : null
        }
    
        <div className="nav-items">
          <ul>
            <li className="underline">
              <NavLink className="nav-link" to="/info">Info</NavLink>
            </li>
            <li>/</li>
            <li className="underline">
              <NavLink className="nav-link" to="/work">Work</NavLink>
            </li>
            <li>/</li>
            <li className="underline">
              <NavLink className="nav-link" to="/play">Play</NavLink>
            </li>

          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
