import React, { Component } from 'react';
import Nav from './Nav';
import '../css/Page.css';

class About extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div id="about" className="inner-page-container">
          <div className="page-content about">
            <p>I’m an artist / designer / technologist working with code as a medium for exploring new ways of interacting and engaging with the world. My most recent work is focused on creating 3D interactive experiences for VR and the web.</p>

            <p>I am currently pursuing my MFA in Media Design Practices at Art Center College of Design.</p>

            <p>Previously, I was a resident artist in the incubator program at the Gray Area Foundation for the Arts. During my time there, I also taught web development and creative coding courses in the 10-week immersive program. I was a student at the School for Poetic Computation in New York in 2014.</p>

            <p>I hold an M.S. in Human-Centered Design and Engineering from the University of Washington, where I spent my time researching the sociocultural aspects of hacker and maker culture, particularly around feminist hackerspace communities. </p>
            
            <p>My bachelor’s degrees are in anthropology and informatics (specialization in human-computer interaction) from UC Irvine.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;