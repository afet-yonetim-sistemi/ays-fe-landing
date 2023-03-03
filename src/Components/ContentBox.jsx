import { React, useContext } from "react";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

import { DataContext } from "../Data/DataContext";

function ContentBox(props) {
  const {  content } = props;
  const { theme } = useContext(DataContext);

  return (
    <div className={theme ? `midBox midBox` : `midBox-dark`}>
      <Box
        sx={{
          margin: 1,
          borderRadius: 10,
          width: "inherit",
          height: 300,
          backgroundColor: "inherit",
          color: "inherit",
        }}
      >
        <div class="box-title">
          <Typography variant="h6">{content}</Typography>
        </div>
        <div>
          <Button color="inherit">Habere Git</Button>
        </div>
      </Box>
    </div>
  );
}

export default ContentBox;
