import React, { Component } from 'react';
import L from 'leaflet';

import '../App.css';
import '../styles/app.css'

class MyMap extends Component {

  componentDidMount() {
    const center = {lat: 48.589172, lng: 2.246237};
    const zoom = 11;
    const archipossible = {title: 'Archipossble', position: {lat: 48.589472, lng: 2.248539}, type: 'general'}

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

    this.archipossibleMarker = L.marker(archipossible.position).addTo(this.map);
  }

  render() {
    return <div id="map"></div>;
  }
}

export default MyMap;
