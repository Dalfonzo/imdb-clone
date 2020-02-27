import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ImdbPro from './pages/imdbPro/ImdbPro';
import Routing from './Routing';

import './App.css';

class App extends Component {
  state = {
    data: []
  };

  render() {
    return (
      <>
        <Switch>
          <Route exact path="/imdbpro" component={ImdbPro} />
          {Routing}
        </Switch>
      </>
    );
  }
}

export default App;
