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

const center = {lat: 48.589172, lng: 2.246237};
const zoom = 13;
let map;
/**
 * @description main component of the application
 */

class App extends Component {
  state = {
    mapLoaded: false,
    resources: true,
    trips: true
  }
  componentDidMount() {

    /**
     *  create the map
     */
    map = L.map('map', {
      center: center,
      zoom: zoom,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
    this.setState({ mapLoaded: true });
  }

  render() {
    const { mapLoaded, resources, trips } = this.state;
    return (
      <div>
        <Header />
        <main>
          <SideBar />
          <div id="map">
            <MyMap
              mapLoaded = { mapLoaded }
              map = { map }
              resources = { resources }
              trips = { trips }
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
