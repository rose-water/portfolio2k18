import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Landing from './Landing';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import ProjectDetail from './ProjectDetail';

class App extends Component {
  
  render() {

    const App = () => (
      <div className="page-container">
        <Nav />
        <Switch>
          <Route exact path='/' component={ Landing }/>
          <Route path='/about' component={ About }/>
          <Route path='/work/:projectId' component={ ProjectDetail }/>
          <Route path='/work' component={ Work }/>
          <Route path='/contact' component={ Contact }/>
        </Switch>
      </div>
    )

    // Only show the three.js sketch on the landing page
    let elem = document.getElementById('canvas');
    if (window.location.pathname === '/') {
      elem.style.display = "block";
    } else {
      elem.style.display = "none";
    }

    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
