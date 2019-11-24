import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl'
import './Map.css'

const RESORTS = 'https://mighty-cliffs-43940.herokuapp.com/api/v1/resorts';
	mapboxgl.accessToken =
		'pk.eyJ1IjoibXRiYWtlcnNwbGl0dGVyIiwiYSI6ImNqc3dxemJtaDBoYXY0M3BqN3VkMDA3dWgifQ.96NXAB8dmRLa8O2ac_KUqA';

class Map extends Component {
  constructor(props){
    super(props)
    this.state = {
      latitude: 41.087132,
      longitude: -117.004372,
      zoom: 4
    }
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      center: [this.state.longitude, this.state.latitude],
      zoom: this.state.zoom,
      style: 'mapbox://styles/mapbox/dark-v10'
    });
  }
    
  render() {
    return (
        <div>
          <div ref={el => this.mapContainer = el} className="map-container" />
        </div>
    );
  }
}

export default Map;