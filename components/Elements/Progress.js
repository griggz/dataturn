import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function Progress({ type, ...other }) {
  return type == "linear" ? (
    <Box sx={{ width: "100%" }}>
      <LinearProgress {...other} />
    </Box>
  ) : (
    ""
  );
}
