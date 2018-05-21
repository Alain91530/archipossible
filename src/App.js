/* eslint-disable */
/**
 * @description import React
 */
import React, { Component } from 'react';

/**
 * @description import leaflet for OSM cards use
 */
import L from 'leaflet';

/**
 * @description import the applcation components
 */
import MyMap  from './components/MyMap';
import Header from './components/Header';
import Footer from './components/Footer';
import SideBar from './components/SideBar';

import './App.css';
import './styles/app.css';
/* eslint-enable */

/**
 * @description main component of the application
 */
class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <main>
          <SideBar />
          <MyMap />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
