import React, { Component } from 'react';

class Nav extends Component { 
  render() {
    return (
      <div className="nav">
        <div className="nav-items">
          <ul>
            <li className="underline">
              <a href="/about">About</a>
            </li>
            <li className="underline">
              <a href="/work">Work</a>
            </li>
            <li className="underline">
              <a href="/" target="_blank">CV</a>
            </li>
            <li className="underline">
              <a href="/teaching">Teaching</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
