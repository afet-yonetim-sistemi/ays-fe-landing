import { React, useContext } from "react";

import { DataContext } from "../Data/DataContext";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";


const drawerWidth = 240;



const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentLeftBar(props) {
  const theme = useTheme();

  const { open, changeOpen, changeTheme } = useContext(DataContext);

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "inherit",
        color: "inherit",
      }}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={changeOpen}>
            {theme.direction === "ltr" ? "Bölmeyi Kapat" : "Bölmeyi Aç"}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem>
            <ListItemButton>
              <Typography>Anasayfa</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <Typography>Hakkımızda</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <Typography>Kurumlar</Typography>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemButton>
              <Typography>Giriş</Typography>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton>
              <Typography>İletişim</Typography>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={changeTheme}>
              <Typography>Tema</Typography>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
