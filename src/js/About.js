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
            <h3>BIO</h3>
            <p><b>I am a technologist, artist, and designer based in Los Angeles, CA.</b></p>

            <p>My experimental art + design practice is concerned with the interplay between humans, natural ecosystems, technology, and infrastructure. I create speculative interventions as a form of critique and way to reimagine systems at various scales, which often take shape through the design and development of fictional artifacts, objects, and interfaces. My design and research methods foreground making and experimentation; I frequently work with various 2D + 3D software tools, code, mixed-media illustration, and physical computing.</p>

            <p>My professional experience has involved working in both applied and conceptual contexts, across formats including interactive web experiences and media art installations. Some of my past clients include SFMOMA, California College of the Arts, Intel, and independent media artists. Alongside this work, some of my more personal endeavors involve the use of technology to explore creative opportunities for self-expression, particularly within immersive world-building, music, and writing.</p>

            <p>When I’m not working, you’ll find me practicing classical piano, watching a slice of life anime, drawing, or going for a walk with my Bernese Mountain Dog, Willow.</p>
          </div>

          <div className="additional-info">
            
            <div>
              <h3>LINKS</h3>
              <ul>
                <li>
                  <a href="https://drive.google.com/file/d/17tU6XLz5edFlqrq5Zpl35SmwB5H3t0hD/view?usp=sharing" target="_blank">RESUME</a> <i className='last-updated'>(last updated 03/2021)</i>
                </li>
                <li>
                 <a href="https://drive.google.com/file/d/1a23cImnzHOaus8lN742yyl_4JOXYfcT3/view?usp=sharing" target="_blank">CV</a> <i className='last-updated'>(last updated 03/2021)</i>
                </li>
                <li>
                  <a href="https://www.are.na/rachel-rose-waterhouse" target="_blank">ARE.NA</a>
                </li>
                <li>
                  <a href="http://github.com/rose-water" target="_blank">GITHUB</a>
                </li>
                <li>
                  <a href="http://instagram.com/rrosewaterhouse" target="_blank">INSTAGRAM</a>
                </li>
              </ul>
             
            </div>

            <div>
              <h3>PREVIOUSLY</h3>
              <ul>
                <li>Freelance creative technologist at <a href="https://www.sfmoma.org/" target="_blank">SFMOMA</a><br/></li>
                <li>Design Lead Intern, <a href="https://datavis.caltech.edu/" target="_blank">Data to Discovery</a><br/>
                NASA JPL + ArtCenter + Caltech</li>
                <li>Workshop instructor: <a href="https://grayarea.org/event/bitrate-ml-music-series/" target="_blank">Intro to P5.js + Tone.js</a><br/>BitRate Series (Google Magenta x Gray Area)</li>
                <li>Workshop instructor: <a href="https://github.com/rose-water/mdp-git-workshop" target="_blank">Intro to Git + GitHub</a><br/>ACCD Media Design Practices</li>
                <li>Incubator artist + creative coding teacher at <a href="http://www.grayarea.org" target="_blank">Gray Area</a></li>
                <li>Student at <a href="" target="_blank">SFPC</a></li>
              </ul>
            </div>

            <div>
              <h3>EDUCATION</h3>
              <ul>
                <li>MFA Media Design Practices, ArtCenter College of Design</li>
                <li>MS Human Centered Design & Engineering, University of Washington</li>
              </ul>
            </div>
            
          </div>
        </div>
        
      </div>
    );
  }
}

export default About;