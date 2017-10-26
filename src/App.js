import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
//cuando tenemos dos parametros  nesesitamos parentesis si es uno no
   handleClick = e => {
    e.preventDefault();
    console.log('The link was clicked.');
   }
  render() {
    //este es igual al html pero  no es, es un jsx de facebook
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">XXWelcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.

          <a href="#" onClick={this.handleClick}>
      Click me
    </a>
        </p>

      </div>
    );
  }
}

export default App;
