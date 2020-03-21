import React, { useState } from 'react'
import './styles.css'
import { ReactBingmaps } from 'react-bingmaps'

export default function App() {
  const [scrollZoomEnabled, setScrollZoom] = useState(false)
  const [bingmapKey, setBingMapKey] = useState(localStorage.bingmapKey)
  const MAP_OPTIONS = {
    showMapTypeSelector: false,
    disableScrollWheelZoom: !scrollZoomEnabled,
  }
  return (
    <div className="App">
      <p>
        paste your bingmapKey
        <input
          type="text"
          id="bingmapKey"
          placeholder={bingmapKey}
          onKeyPress={e => {
            localStorage.bingmapKey = document.getElementById(
              'bingmapKey'
            ).value
            setBingMapKey(localStorage.bingmapKey)
          }}
        />
      </p>
      <h3
        onClick={() => {
          setScrollZoom(!scrollZoomEnabled)
        }}
      >
        Toggle scrollZoomEnabled {String(scrollZoomEnabled)}
      </h3>
      <div
        style={{
          width: '150px',
          height: '150px',
          border: '1px solid red',
        }}
      >
        <ReactBingmaps
          zoom={11}
          center={[13.0827, 80.2707]}
          bingapKey={bingmapKey}
          mapOptions={MAP_OPTIONS}
        />
      </div>
    </div>
  )
}
