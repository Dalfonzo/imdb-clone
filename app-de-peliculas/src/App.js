import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './pages/home/Home';
import SignIn from './pages/sign-in/SignIn'
import Footer from './components/footer/Footer';

import './App.css';

class App extends Component {
  state = {
    data: []
  };

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
