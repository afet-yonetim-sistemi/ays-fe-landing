import React from "react";

import { Routes, Route } from "react-router-dom";

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
