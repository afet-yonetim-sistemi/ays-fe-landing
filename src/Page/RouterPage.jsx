import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AYSAppBar from "../Components/AppBar";
import Footer from "../Components/Footer";
import GMap from "../Components/Gmap";
import MapSlider from "../Components/Gmap";
import PersistentLeftBar from "../Components/PersistentLeftBar";


import Landing from "./Landing";

function RouterPage() {
  return (
    <>
      <Router>
        <AYSAppBar />
        <PersistentLeftBar />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <Routes>
          <Route path="/selam" element={<GMap/>} />
        </Routes>
        <Footer/>

      </Router>
    </>
  );
}

export default RouterPage;
