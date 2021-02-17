import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import ProjectDetail from './ProjectDetail';

class App extends Component {
  
  render() {

    const App = () => (
      <Switch>
        <Route exact path='/' component={ Landing }/>
        <Route path='/info' component={ About }/>
        <Route path='/work/:projectId' component={ ProjectDetail }/>
        <Route path='/work' component={ Work }/>
        <Route path='/contact' component={ Contact }/>
      </Switch>
    )
    
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
