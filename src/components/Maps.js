import React from "react";
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import "../css/Map.css";
import { showMapData } from "./utils";

function Maps({ countries, caseType , center, zoom }) {
  return (
    <div className="Map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showMapData(countries, caseType)}
      </LeafletMap>
    </div>
  );
}

export default Maps;
