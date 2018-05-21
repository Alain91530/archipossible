/* eslint-disable */
import React, { Component } from 'react';
import L from 'leaflet';
/* eslint-enable */
import '../App.css';
import '../styles/app.css';

/**
 * @description data
 */
const center = {lat: 48.589172, lng: 2.246237};
const zoom = 13;
const archipossible = {title: 'Archipossble', position: {lat: 48.589472, lng: 2.248539}, type: 'general'};

const resources = [
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

  /*  markers.on('mouseover', function(e){ e.layer.openPopup(); })
    .on('mouseout', function(e){ e.layer.closePopup(); });*/
  return markers;
}
class MyMap extends Component {

  componentDidMount() {

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

    /**
     * @description create the different icons
     */
    let LeafIcon = L.Icon.extend({
      options: {
        shadowUrl: 'leaf-shadow.png',
        iconSize:     [38, 95],
        shadowSize:   [50, 64],
        iconAnchor:   [22, 94],
        shadowAnchor: [4, 62],
        popupAnchor:  [-3, -76]
      }
    });
    let greenIcon = new LeafIcon({iconUrl: '../icons/leaf-green.png'});
    let redIcon = new LeafIcon({iconUrl: '../icons/leaf-red.png'});
    let orangeIcon = new LeafIcon({iconUrl: '../icons/leaf-orange.png'});

    /**
     * @description create the choice of map layers
     */
    this.baselayers = {
      imagerie : L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'),
      OSM: L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'}),
      Topo: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
      }),
      ESRI: L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}')};
    this.baselayers.ESRI.addTo(this.map);

    /**
     * @description create and add the trips markers
     */
    let poiTrip = markersArray(trip, greenIcon);
    this.map.addLayer(poiTrip);

    /**
     * @description create and add the resources markers
     */
    let poiResource = markersArray(resources, orangeIcon);
    this.map.addLayer(poiResource);

    /**
     * @description add the control to choose the map layer and markers
     */
    let markers = {
      Ressources: poiResource,
      Sorties: poiTrip
    };
    L.control.layers(this.baselayers, markers).addTo(this.map);

    /**
     * adjust map to fit markers position
     */
    let bounds = poiResource.getBounds();
    bounds = bounds.extend(poiTrip.getBounds());
    this.map.fitBounds(bounds);

    /**
     * @description add Archipossible marker
     */
    let archiMarker = '<p class="archipossible">'+archipossible.title+'</p>';
    this.archipossibleMarker = L.marker(archipossible.position, {icon: redIcon}).addTo(this.map).bindPopup(archiMarker);
  }

  render() {
    return (
      <div className="ressource-map">
        <div id="map"></div>
      </div>);
  }
}

export default MyMap;
