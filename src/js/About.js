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
            <p>I’m a technologist, artist, and designer based in Los Angeles, CA.</p>
            <p>My professional experience has involved working in both applied and conceptual contexts, across formats including interactive web experiences and media art installations. Some of my past clients include SFMOMA, Intel, California College of the Arts, and independent media artists.</p>
            <p>My personal practice involves experimentation through code and playing with 3D software tools. My work is invested in exploring how these media lend themselves to creative forms of self-expression, particularly within immersive world-building, music, and writing.</p> 
            <p>I am currently finishing my MFA in Media Design Practices at Art Center College of Design, and will graduate in April 2021. Prior to that, I was a resident artist and creative coding instructor at Gray Area, and am an alumna of the School for Poetic Computation.</p>
            <p>When I’m not working, you’ll find me practicing classical piano, watching a slice of life anime, drawing, or going for a walk with my Bernese Mountain Dog, Willow.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;