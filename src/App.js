import React from 'react';
import logo from './logo.svg';
import './App.css';

import locationsData from "./locations.json";

import MyFilteringComponent from "./MyFilteringComponent.js";

class App extends React.Component {
  render() {
    return (
      <MyFilteringComponent content={locationsData.locations} />
    );
  }
}

export default App;
