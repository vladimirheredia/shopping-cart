import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Products from './Products';

class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Products/>
      </div>
    );
  }
}

export default App;
