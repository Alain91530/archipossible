/* eslint-disable */
import React, { Component } from 'react';
import L from 'leaflet';
/* eslint-enable */
import '../App.css';
import '../styles/app.css';

/**
 * @description data
 */
const archipossible = {title: 'Archipossble', position: {lat: 48.589472, lng: 2.248539}, type: 'general'};

/**
 * @description create the choice of map layers
 */
const baselayers = {
  imagerie : L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'),
  OSM: L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'}),
  Topo: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  }),
  ESRI: L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}')};let archipossibleMarker;

/**
 * @description create the different icons
 */
const LeafIcon = L.Icon.extend({
  options: {
    shadowUrl: 'leaf-shadow.png',
    iconSize:     [38, 95],
    shadowSize:   [50, 64],
    iconAnchor:   [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor:  [-3, -76]
  }
});

const greenIcon = new LeafIcon({iconUrl: '../icons/leaf-green.png'});
const redIcon = new LeafIcon({iconUrl: '../icons/leaf-red.png'});
const orangeIcon = new LeafIcon({iconUrl: '../icons/leaf-orange.png'});

/**
 * @description create Archipossible marker
 */
const archiMarker = '<p class="archipossible">'+archipossible.title+'</p>';

const allResources = [
  {title: 'Ateliers 29', position: {lat: 48.589716, lng: 2.25188}, type: 'autre'},
  {title: 'Mairie', position: {lat: 48.590137, lng: 2.247635}, type: 'autre'},
  {title: 'Depan\'Num', position: {lat: 48.587788, lng: 2.115107}, type: 'informatique'},
  {title: 'L\'atoll', position: {lat: 48.653711, lng: 2.253098},type: 'autre'}
];
const trip = [
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

function markersArray(items, icon) {
  let markers = new L.featureGroup();
  let marker;
  items.forEach(item => {
    marker = new L.marker([item.position.lat,item.position.lng], {icon: icon}).bindPopup(item.title);
    markers.addLayer(marker);
  });

  return markers;
}
class MyMap extends Component {

  render() {

    const mapLoaded = this.props.mapLoaded;
    const map = this.props.map;
    const trips = this.props.trips;
    const resources = this.props.resources;

    if (mapLoaded) {
      baselayers.ESRI.addTo(map);

      /**
     * @description create and add the trips markers
     */
      let poiTrip = markersArray(trip, greenIcon);
      (trips) ? map.addLayer(poiTrip) : map.removeLayer(poiTrip);

      /**
     * @description create and add the resources markers
     */
      let poiResource = markersArray(allResources, orangeIcon);
      (resources) ? map.addLayer(poiResource) : map.removeLayer(poiResource);

      /**
     * @description add the control to choose the map layer and markers
     */
      let markers = {
        Ressources: poiResource,
        Sorties: poiTrip
      };
      L.control.layers(baselayers, markers).addTo(map);

      archipossibleMarker = L.marker(archipossible.position, {icon: redIcon}).addTo(map).bindPopup(archiMarker);

      /**
       * adjust map to fit markers position
      */
      let bounds = poiResource.getBounds();
      bounds = bounds.extend(poiTrip.getBounds());
      map.fitBounds(bounds);
    }
    return (
      <div className="ressource-map">
      </div>);
  }
}

export default MyMap;
