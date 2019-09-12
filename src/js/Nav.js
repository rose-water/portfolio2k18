import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
import cv from '../assets/rachel-rose-ulgado-2018-CV.pdf';
import '../css/Nav.css';

class Nav extends Component { 
  render() {
    return (
      <div className="nav">
        {
          window.location.pathname !== '/' ? 
          <div id="name-label">
            <Link to="/">RACHEL ROSE WATERHOUSE</Link>
          </div> : null
        }
    
        <div className="nav-items">
          <ul>
            <li className="underline">
              <NavLink className="nav-link" to="/info">Info</NavLink>
            </li>/
            <li className="underline">
              <NavLink className="nav-link" to="/work">Work</NavLink>
            </li>/
            <li className="underline">
              <a className="nav-link" href={ cv } rel="noopener noreferrer" target="_blank">CV</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
