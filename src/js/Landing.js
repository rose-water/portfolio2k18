import React, { Component } from 'react';
import '../css/Landing.css';

class Landing extends Component {
  render() {
    return (
      <div id="info">
        <div className="borderline"></div>
        <div>
          <span id="info-label">ROSEWATER</span>
        </div>
        <div id="info-content">
          <p>I'm Rachel, a multidisciplinary artist & technologist working primarily in 3D, creating interactive & audiovisual experiences, speculative worlds, & alternate realities.</p>
          <p>My work is heavily influenced & inspired by nature, the cosmos, & our subconscious.</p>
        </div>
        <div id="social">
          <a href="http://instagram.com/tenderbloom" target="_blank">
            <img id="ig-logo" alt="ig-logo" src="assets/logo-instagram.svg"></img>
          </a>
          <a href="mailto:rachel.ulgado@gmail.com" target="_blank">
            <img id="email-logo" alt="email-logo" src="assets/logo-email.svg"></img>
          </a>
        </div>
      </div>
    );
  }
}

export default Landing;