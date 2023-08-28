import React from "react";

import { Routes, Route } from "react-router-dom";
import Footer from "../Components/Footer";

import MainPage from "./Main.jsx";

function RouterPage() {
  return (
    <>
      <>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>

      </>
    </>
  );
}

export default RouterPage;
