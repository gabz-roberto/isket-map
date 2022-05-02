import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  LayerGroup,
  Circle,
  FeatureGroup,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

import axios from "../../api/index.js";

import "leaflet-draw/dist/leaflet.draw.css";
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
    };
    fetchCountries();
  }, []);

  const _onCreate = (event) => {
    console.log(event);
  };

  const _onEdited = (event) => {
    console.log(event);
  };

  const _onDeleted = (event) => {
    console.log(event);
  };

  return (
    <main className="main">
      <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FeatureGroup>
          <EditControl
            position="topright"
            onCreated={_onCreate}
            onEdited={_onEdited}
            onDeleted={_onDeleted}
            // draw={{
            //   rectangle: false,
            //   polyline: false,
            //   circle: false,
            //   circlemarker: false,
            //   marker: false,
            // }}
          />
        </FeatureGroup>

        <LayersControl position="topright">
          <LayersControl.Overlay checked name="Layer group with circles">
            <LayerGroup>
              {countries !== null
                ? countries.data.map((country, i) => (
                    <Circle
                      key={i}
                      center={[
                        country.location.coordinates[1],
                        country.location.coordinates[0],
                      ]}
                      pathOptions={{ fillColor: "blue" }}
                      radius={70000}
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
