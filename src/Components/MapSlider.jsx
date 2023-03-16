import {React, useEffect} from "react";

import "../Styles.css";
import Box from "@mui/material/Box";

import GoogleMap from "google-map-react";
import RoomIcon from "@mui/icons-material/Room";
import { Typography } from "@mui/material";

import API_KEY from "../keys";


function SimpleMap() {

  const google_key = API_KEY

  let defaultProps = {
    center: {
      lat: 41.0122,
      lng: 28.976,
    },
    zoom: 8,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100%", width: "100%" }}>
      <GoogleMap
        bootstrapURLKeys={{ key: google_key }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Typography>hello</Typography>
      </GoogleMap>
    </div>
  );
}

function MapBox() {


  return (
    <Box
      id="map"
      sx={{
        width: 600,
        height: 800,
        backgroundColor: "inherit",
      }}
    >
      <SimpleMap />
    </Box>
  );
}

function MapSlider(props) {

  
    

  return (
    <>
      
    </>
  );
}

export default MapSlider;
