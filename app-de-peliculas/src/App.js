import React, { Component } from 'react';

import Header from './components/header/Header';
import Home from './pages/home/Home'
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
        <Home/>
        <Footer />
      </>
    );
  }
}

export default App;
