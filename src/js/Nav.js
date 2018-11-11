import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Nav.css';

class Nav extends Component { 
  render() {
    return (
      <div className="nav">
        <div className="nav-items">
          <ul>
            <li className="underline">
              <Link to="/about">About</Link>
            </li>
            <li className="underline">
              <Link to="/work">Work</Link>
            </li>
            <li className="underline">
              <a href="/" target="_blank">CV</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
