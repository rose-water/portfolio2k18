import React, { Component } from 'react';
import '../css/Landing.css';
import igLogo from '../assets/logo-instagram.svg';
import emailIcon from '../assets/logo-email.svg';


class Landing extends Component {
  render() {
    return (
      <div id="info">
        <div className="borderline"></div>
        <div>
          <span id="info-label">ROSEWATER</span>
        </div>
        <div id="info-content">
          <p>I'm Rachel, an artist and technologist working primarily with 3D software and code to create experiences for VR and the web. My work focuses on envisioning and materializing speculative worlds to investigate notions of identity and map internal landscapes.</p>
          <p>My work is heavily influenced by nature, the cosmos, and our subconscious.</p>
        </div>
        <div id="social">
          <a href="http://instagram.com/tenderbloom" rel="noopener noreferrer" target="_blank">
            <img id="ig-logo" alt="ig-logo" src={ igLogo }></img>
          </a>
          <a href="mailto:rachel.ulgado@gmail.com" rel="noopener noreferrer" target="_blank">
            <img id="email-logo" alt="email-logo" src={ emailIcon }></img>
          </a>
        </div>
      </div>
    );
  }
}

export default Landing;