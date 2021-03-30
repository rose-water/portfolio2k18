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
          <p>I am a technologist, artist, and designer based in Los Angeles, CA.</p>
          <p>My experimental art + design practice is concerned with the interplay between humans, natural ecosystems, technology, and infrastructure. Through my work I complicate and broaden notions of ‘ecosystems’ as being deeply intertwined with humans rather than upholding the artificial binary of humans versus nature.</p>
          <p>I create speculative interventions as a form of critique and way to reimagine systems at various scales, which often take shape through the design and development of fictional artifacts, objects, and interfaces. My design and research methods foreground making and experimentation; I frequently work with various 2D + 3D software tools, code, mixed-media illustration, and physical computing.</p>
          <p>Some of my recent projects include: <a href="https://compossibleassemblages.cargo.site" target="_blank">Compossible Assemblages</a>, a series of near-future interventions and provocations that renegotiate the capitalistic paradigms of utilitarian infrastructure networks (e.g. water, data centers, telecommunications), and <a href="/work/Nimbus">Nimbus</a>, an interactive visualization tool enabling climate modeling research scientists to analyze multivariate cloud simulation data. Alongside this work, some of my more personal endeavors involve the use of technology to explore creative opportunities for self-expression, particularly within immersive world-building, music, and writing.</p>
          <p>My professional experience has involved working in both applied and conceptual contexts, across formats including interactive web experiences and media art installations. Some of my past clients include SFMOMA, California College of the Arts, Intel, and independent media artists. I have an MFA in <a href="http://www.mediadesignpractices.net" target="_blank">Media Design Practices</a> from ArtCenter College of Design, and an MS in <a href="https://www.hcde.washington.edu/" target="_blank">Human Centered Design and Engineering</a> from the University of Washington. Previously, I was a resident artist and creative coding instructor at <a href="http://www.grayarea.org" target="_blank">Gray Area Foundation for the Arts</a>, and a student in the <a href="https://sfpc.io" target="_blank">School for Poetic Computation</a>.</p>
          <p>When I’m not working, you’ll find me practicing classical piano, watching a slice of life anime, drawing, or going for a walk with my Bernese Mountain Dog, Willow.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;