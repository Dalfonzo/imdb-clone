import React, { Component } from 'react';
// Componentes

import Header from './components/header/Header.component';
import Carousel from './components/carousel/Carousel.component';

import './App.css';

//quitar
import Test2 from './components/test/test2';

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
        {/* <Header />
        <Carousel /> */}
        <Test2 />
      </div>
    );
  }
}

export default App;
