import React from "react";
import RouterPage from "./Page/RouterPage";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <RouterPage />
      </BrowserRouter>
    </>
  );
}

export default App;
