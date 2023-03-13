import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AYSAppBar from "../Components/AppBar";
import Footer from "../Components/Footer";
import MapSlider from "../Components/MapSlider";
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
          <Route path="/dev" element={<MapSlider/>} />
        </Routes>
        <Footer/>

      </Router>
    </>
  );
}

export default RouterPage;
