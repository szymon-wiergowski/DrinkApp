import React from "react";

import "../App.css";

import MapGoogle from "./components/MapGoogle";
import List from "./components/List";

export default () => {
  return (
    <div className="googleMaps">
      <div className="googleMaps__label">
        <List />
      </div>
      <div className="googleMaps__mapframe">
        <div className="googleMaps__map">
          <MapGoogle />
        </div>
      </div>
    </div>
  );
};
