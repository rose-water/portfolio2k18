import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cv from '../assets/rachel-rose-ulgado-2018-CV.pdf';
import '../css/Nav.css';

class Nav extends Component { 
  render() {
    return (
      <div className="nav">
        {
          window.location.pathname !== '/' ? 
          <span id="name-label">
            {/* <Link to="/">RACHEL ROSE ULGADO</Link> */}
            RACHEL ROSE ULGADO
          </span> : null
        }
    
        <div className="nav-items">
          <ul>
            <li className="underline">
              <Link to="/about">About</Link>
            </li>
            <li className="underline">
              <Link to="/work">Work</Link>
            </li>
            <li className="underline">
              <a href={ cv } rel="noopener noreferrer" target="_blank">CV</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
