import React from 'react';
import logo from './logo.svg';
import './App.css';

import MyFilteringComponent from "./MyFilteringComponent.js";

class App extends React.Component {
  render() {
    const countries =
      [
        "Afghanistan",
        "Åland Islands",
        "Albania",
        "Algeria"
      ];
    return (
      <MyFilteringComponent content={countries} />
    );
  }
}

export default App;
