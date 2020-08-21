import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import ImdbPro from './pages/imdbPro/ImdbPro';
import routing from './constants/routing';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/imdbpro" component={ImdbPro} />
        {routing}
      </Switch>
    );
  }
}

export default App;
