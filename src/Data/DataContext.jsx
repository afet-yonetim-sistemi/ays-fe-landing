import { createContext, useState } from "react";
import React from "react";

const DataContext = createContext();

function DataProvider(props) {
  const [theme, setTheme] = useState(false);

  const [open, setOpen] = useState(false);

  const changeOpen = () => {
    setOpen(!open);
  };

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <DataContext.Provider
      value={{
        theme,
        changeTheme,

        open,
        changeOpen,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export { DataContext, DataProvider };
