import React from "react";

import RouterPage from "./Page/RouterPage";
import { DataProvider } from "./Data/DataContext";

function App() {
  return (
    <>
      <DataProvider>
        <RouterPage />
      </DataProvider>
    </>
  );
}

export default App;
