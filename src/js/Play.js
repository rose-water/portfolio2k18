import React, { Component } from 'react';
import playLinks from './PlayData.js';
import Nav from './Nav';
import '../css/Page.css';

class Play extends Component {
  
	renderGrid() {
		let gridImgs = playLinks[1].imgs;
		let imgElems = gridImgs.map((data, idx) => {
			return <div className="play-img-container" key={`play-img-${idx}`}>
				<img 
					className="play-img" 
					src={ require(`../assets/play/${ data.img }`).default }>
				</img>
			</div>
			
		});

		return imgElems;
	}

  render() {
    return (
      <>
        <Nav />
				<div id="play" className="inner-page-container">
					<div className='play-description'>
						<h3>PLAY</h3>
						<p>Making and experimentation drive my creative practice. I play with various code libraries and 2D + 3D software tools, including Cinema 4D, Unity, three.js, Processing / p5.js, openFrameworks, Sketch 3, Procreate, and Adobe Illustrator.</p>
					</div>
					<div className='play-items-grid'>
						{ this.renderGrid() }
					</div>
				</div>
      </>
    );
  }
}
  
export default Play;