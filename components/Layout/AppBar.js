import React from "react";
import { AppBar as MuiAppBar } from "@mui/material";

function AppBar(props) {
  return (
    <MuiAppBar
      elevation={0}
      position="absolute"
      color="transparent"
      {...props}
      sx={{
        color: "primary.main",
        paddingLeft: { sm: 1, md: 2, lg: 7, xl: 7 },
        paddingRight: { sm: 1, md: 2, lg: 7, xl: 7 },
        maxWidth: 1400,
        margin: "auto",
        left: 0,
        right: 0,
      }}
    />
  );
}

AppBar.propTypes = {};

export default AppBar;
