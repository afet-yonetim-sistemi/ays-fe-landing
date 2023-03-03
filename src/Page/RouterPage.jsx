import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AYSAppBar from "../Components/AppBar";
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
      </Router>
    </>
  );
}

export default RouterPage;
