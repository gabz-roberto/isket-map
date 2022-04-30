import React from "react";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { getCountries } from "../../api/index.js";

import "./Main.css";

const Main = (props) => {
  console.log(getCountries());
  return (
    <main className="main">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* {getCountries.map((country) => (
          <Marker key={country._id} position={[country.location.coodinates[0], country.location.coodinates[1]]}></Marker>
        ))} */}
      </MapContainer>
    </main>
  );
};

export default Main;
