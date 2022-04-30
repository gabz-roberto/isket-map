import React, { useState, useEffect } from "react";
import axios from "../../api/index.js";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  LayerGroup,
  all,
  FeatureGroup,
  Rectangle,
  Circle,
} from "react-leaflet";

import "./Main.css";

const Main = (props) => {
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("get-countries");
        setCountries(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCountries()
  }, [])

  return (
    <main className="main">
      <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayersControl position="topright">
          <LayersControl.Overlay checked name="Layer group with circles">
            <LayerGroup>
              {countries !== null
                ? countries.data.map((country, i) => (
                    <Circle key={i}
                      center={[
                        country.location.coordinates[1],
                        country.location.coordinates[0],
                      ]}
                      pathOptions={{ fillColor: "blue" }}
                      radius={80000}
                    />
                  ))
                : null}
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </main>
  );
};

export default Main;
