import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <input placeholder="Usuario"></input>
        <input placeholder="Mensagem..."></input>
        <button>Enviar</button>

      </div>
    );
  }
}

export default App;
