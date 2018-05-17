import React, { Component } from 'react';
import L from 'leaflet';

import '../App.css';
import '../styles/app.css'

class MyMap extends Component {

  componentDidMount() {
    const center = {lat: 48.589172, lng: 2.246237}
    const zoom = 11;
    // create map
    this.map = L.map('map', {
      center: center,
      zoom: zoom,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
  }

  render() {
    return <div id="map"></div>;
  }
}

export default MyMap;
