import React, { Component } from 'react';
import Nav from './Nav';
import Landing from './Landing';
import About from './About';
import Work from './Work';
import Teaching from './Teaching';

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Nav />
        <Landing />
      </div>
    );
  }
}

export default App;
