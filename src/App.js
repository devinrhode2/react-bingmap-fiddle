import React, { useState } from "react";
import "./styles.css";
import ReactBingmap from "react-bingmaps";

export default function App() {
  const [scrollZoomEnabled, setScrollZoom] = useState(false);
  const MAP_OPTIONS = {
    showMapTypeSelector: false,
    disableScrollWheelZoom: !scrollZoomEnabled
  };
  return (
    <div className="App">
      <h1
        onClick={() => {
          setScrollZoom(!scrollZoomEnabled);
        }}
      >
        Toggle scrollZoomEnabled {String(scrollZoomEnabled)}
      </h1>
      <ReactBingmap zoom={11} mapOptions={MAP_OPTIONS} />
    </div>
  );
}
