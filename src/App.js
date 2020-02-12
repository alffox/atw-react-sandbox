import React from 'react';
import logo from './logo.svg';
import './App.css';

import locationsData from "./locations.json";

import AtwFlags from "./modules/AtwFlags.js";

class App extends React.Component {

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(
    currentLocationIndex,
    currentLocation,
    currentCountry,
    currentLocationISO_3166_1_alpha_2,
  ) {
    this.setLocationIndex(currentLocationIndex);
    this.fetchCurrentLocation(currentLocation);
    this.fetchCurrentCountry(currentCountry);
    this.fetchCurrentLocationISO_3166_1_alpha_2(
      currentLocationISO_3166_1_alpha_2
    );
  }

  render() {
    return (
      <AtwFlags
        locationsData={locationsData}
        handleClick={this.handleClick}
        content={locationsData.locations}
      />
    );
  }
}

export default App;
