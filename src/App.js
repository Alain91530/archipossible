import React, { Component } from 'react';
import L from 'leaflet';

import  MyMap  from './components/MyMap';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';
import './styles/app.css';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <MyMap />
        <Footer />
      </div>
    )
  }
}

export default App;
