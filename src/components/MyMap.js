/* eslint-disable */
import React, { Component } from 'react';
import L from 'leaflet';
/* eslint-enable */
import '../App.css';
import '../styles/app.css';

class MyMap extends Component {

  componentDidMount() {
    const center = {lat: 48.589172, lng: 2.246237};
    const zoom = 25;
    const archipossible = {title: 'Archipossble', position: {lat: 48.589472, lng: 2.248539}, type: 'general'};

    /**
     *  create the map
     */
    this.map = L.map('map', {
      center: center,
      zoom: zoom,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });

    this.poi = new L.LayerGroup();
    L.marker([48.589172, 2.5]).bindPopup('<b>test archi</b>').addTo(this.map)

    this.baselayers = {
      imagery : L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'),
      ESRI: L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}')};
    this.baselayers.ESRI.addTo(this.map);

    L.control.layers(this.baselayers, {POI:this.poi}).addTo(this.map);
    /**
     * Add Archipossible marker
     */
    this.archipossibleMarker = L.marker(archipossible.position).addTo(this.map).bindPopup(archipossible.title);
  }

  render() {
    return <div id="map"></div>;
  }
}

export default MyMap;
