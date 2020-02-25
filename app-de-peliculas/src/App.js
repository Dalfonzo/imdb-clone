import React, { Component } from 'react';
// Componentes

import Header from './components/header/Header';
import Carousel from './components/carousel/Carousel';

import './App.css';

//quitar

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div className="contenedor">
        <Header />
        <Carousel />
      </div>
    );
  }
}

export default App;
