import React from "react";

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import "../Styles.css";

import G_KEY from "../keys.jsx";

const position = { lat: 37.0008, lng: 36.545 };






function GMap(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: G_KEY,
  });

 

  if (!isLoaded) return <>loading...</>;
  else
    return (
      <>
        <div class="map">
          <GoogleMap
            zoom={6}
            center={{ lat: 39, lng: 35 }}
            mapContainerClassName="map"
          >
            <Marker position={position} />
          </GoogleMap>
        </div>
      </>
    );
}



export default GMap;
