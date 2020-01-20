import React, { Component } from 'react';
import './Map.css'

class Map extends Component {
  constructor(props){
    super(props)
    this.state = {
      latitude: 41.087132,
      longitude: -117.004372,
      zoom: 4
    }
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