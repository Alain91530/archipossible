/* eslint-disable */
import React, { Component } from 'react';
import L from 'leaflet';
/* eslint-enable */
import '../App.css';
import '../styles/app.css';

class MyMap extends Component {

  componentDidMount() {
    const center = {lat: 48.589172, lng: 2.246237};
    const zoom = 6;
    const archipossible = {title: 'Archipossble', position: {lat: 48.589472, lng: 2.248539}, type: 'general'};
    const pointsOfInterest = [
      {title: 'Archipossble', position: {lat: 48.589472, lng: 2.248539}, type: 'general'},
      {title: 'Ateliers 29', position: {lat: 48.589716, lng: 2.25188}, type: 'general'},
      {title: 'Mairie', position: {lat: 48.590137, lng: 2.247635}, type: 'general'},
      {title: 'Depan\'Num', position: {lat: 48.587788, lng: 2.115107}, type: 'general'},
      {title: 'L\'atoll', position: {lat: 48.653711, lng: 2.253098},type: 'general'},
      {title: 'Palais Idéal', position: {lat: 45.256273, lng: 5.028502},type: 'sortie'},
      {title: 'Guédelon', position: {lat: 47.583389, lng: 3.155042},type: 'sortie'},
      {title: 'La fabuloserie', position: {lat: 47.933016, lng: 3.10697},type: 'sortie'},
      {title: 'La Piscine Roubaix', position: {lat: 50.692162, lng: 3.167649},type: 'sortie'},
      {title: 'La maison Triolet', position: {lat: 48.568377, lng: 1.925574},type: 'sortie'},
      {title: 'Musée Camille Claudel', position: {lat: 48.494028, lng: 3.500883},type: 'sortie'},
      {title: 'Le Bernard Luginbühl Stiftung', position: {lat: 47.048942, lng: 7.56706},type: 'sortie'},
      {title: 'La maison sculptée de Jacques Lucas', position: {lat: 47.980852, lng: -1.504377},type: 'sortie'},
      {title: 'La maison du poëte ferrailleur', position: {lat: 47.870733, lng: -2.499132},type: 'sortie'},
      {title: 'La fondation Vuitton', position: {lat: 48.876614, lng: 2.263422},type: 'sortie'},
      {title: 'FRAC Orléans', position: {lat:  47.904094, lng: 1.896835},type: 'sortie'},
      {title: 'Musée des Arts et Metiers', position: {lat: 48.866639, lng: 2.355438},type: 'sortie'}
    ];
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
    pointsOfInterest.map(point =>{ L.marker([point.position.lat, point.position.lng]).bindPopup(point.title).addTo(this.map);return (point);});
    this.markers = {POI: this.poi};
    this.baselayers = {
      imagerie : L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'),
      OSM: L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'}),
      Topo: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
      }),
      ESRI: L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}')};
    this.baselayers.ESRI.addTo(this.map);

    L.control.layers(this.baselayers, this.markers).addTo(this.map);
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
