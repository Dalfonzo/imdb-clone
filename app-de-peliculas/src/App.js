import React, { Component } from 'react';
// Componentes

import Header from './components/header/Header';
import Carousel from './components/carousel/Carousel';
import Slider from './components/slider/Slider';

import './App.css';

class App extends Component {
  state = {
    data: []
  };

  render() {
    return (
      <div className="contenedor">
        <Header />
        <Carousel />
        <Slider/>
      </div>
    );
  }
}

export default App;
