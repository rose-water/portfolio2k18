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
            <p>I’m an artist, technologist, and researcher working with code as a medium for exploring new ways of interacting and engaging with the world. My most recent work is focused on creating 3D interactive experiences for VR and the web.</p>

            <p>I am a currently a resident of the incubator program at Gray Area Foundation for the Arts, where I also teach and mentor students in creative coding and media arts.</p>

            <p>My bachelor’s degrees are in anthropology and informatics (specialization in human-computer interaction) from UC Irvine, where I started a campus makerspace and designed educational tools for adolescents with Autism Spectrum Disorder.</p>

            <p>I hold a master’s degree is in human-centered design and engineering from the University of Washington, where I spent my time researching the sociocultural aspects of hacker and maker culture, particularly around feminist hackerspace communities.</p>

            <p>I was a student at the School for Poetic Computation in New York in 2014.</p>
            
            <p>My past work experience has involved a hybrid of UX research and web development at several tech and design companies, including IBM, Intel, Schema Design, and Xerox PARC.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;