import React, { Component } from 'react';
// Componentes

import Header from './components/header/Header.component';

import './App.css';

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
      </div>
    );
  }
}

export default App;
