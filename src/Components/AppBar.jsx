import { React, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import "../Styles.css";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { DataContext } from "../Data/DataContext";

export default function AYSAppBar() {
  const history = useNavigate();

  const {  changeOpen } = useContext(DataContext);

  return (
    <div>
      <Box>
        <AppBar class="appBar" position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={changeOpen}
            >
              <MenuIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                history("/");
              }}
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ mr: 2 }}
            >
              <Typography variant="h4"> AYS</Typography>
            </IconButton>

            <Button
              color="inherit"
              onClick={() => {
                history("/Hakkımızda");
              }}
            >
              Hakkımızda
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
