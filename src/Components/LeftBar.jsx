import { React, useContext } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "../Styles.css";
import { DataContext } from "../Data/DataContext";

function LeftBar() {
  const {theme, changeTheme } = useContext(DataContext);

  const handleChange = () => {
    changeTheme();
  };

  return (
    <div className={theme ? `pageTemplate pageTemplate-dark` : `pageTemplate`}>
      <div className="leftbar">
        <Typography variant="h6"> LeftBar </Typography>
        <Button onClick={handleChange}>
          {" "}
          <Typography variant="p"> theme </Typography>
        </Button>
        <Button>
          {" "}
          <Typography variant="p"> Button </Typography>
        </Button>
        <Button o>
          {" "}
          <Typography variant="p"> Button </Typography>
        </Button>
        <Button>
          {" "}
          <Typography variant="p"> Button </Typography>
        </Button>
        <Button>
          {" "}
          <Typography variant="p"> Button</Typography>
        </Button>
      </div>
    </div>
  );
}

export default LeftBar;
