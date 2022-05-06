import React from "react";
import { IconButton, Box } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function Paginate({
  index,
  total,
  handleSlideLeft,
  handleSlideRight,
}) {
  return (
    <Box
      sx={{
        marginTop: 5,
        marginBottom: 10,
        paddingBottom: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IconButton
        sx={{ fontSize: 25 }}
        onClick={handleSlideLeft}
        disabled={index === 0 ? true : false}
      >
        <ArrowBackIosIcon sx={{ height: 35 }} />
      </IconButton>
      <Box sx={{ fontSize: 25 }}>{index + 1 + " / " + total}</Box>
      <IconButton
        sx={{ fontSize: 25 }}
        onClick={handleSlideRight}
        disabled={index === total - 1 ? true : false}
      >
        <ArrowForwardIosIcon sx={{ height: 35 }} />
      </IconButton>
    </Box>
  );
}
