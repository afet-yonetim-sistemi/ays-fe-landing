import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AYSAppBar from "../Components/AppBar";
import Footer from "../Components/Footer";
import GMap from "../Components/Gmap";

import PersistentLeftBar from "../Components/PersistentLeftBar";


import LandingPage from "./LandingPage.jsx";
import MainPage from "./Main.jsx";

function RouterPage() {
  return (
    <>
      <Router>
        <AYSAppBar />
        <PersistentLeftBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
        <Routes>
          <Route path="/selam" element={<GMap/>} />
        </Routes>
        <Routes>
          <Route path="/Hakkımızda" element={<LandingPage/>} />
        </Routes>
        <Footer/>

      </Router>
    </>
  );
}

export default RouterPage;
