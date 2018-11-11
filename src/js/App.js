import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Landing from './Landing';
import About from './About';
import Work from './Work';
import Teaching from './Teaching';

class App extends Component {
  render() {
    const App = () => (
      <div className="page-container">
        <Nav />
        <Switch>
          <Route exact path='/' component={ Landing }/>
          <Route path='/about' component={ About }/>
          <Route path='/work' component={ Work }/>
          <Route path='/teaching' component={ Teaching }/>
        </Switch>
      </div>
    )

    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
