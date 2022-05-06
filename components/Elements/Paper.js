import React from "react";
import PropTypes from "prop-types";
import MuiPaper from "@mui/material/Paper";

function Paper(props) {
  const { background = "light", sx, ...other } = props;

  return (
    <MuiPaper
      elevation={1}
      square
      sx={{
        ...sx,
        backgroundColor:
          background === "dark"
            ? "secondary.dark"
            : background === "main"
            ? "secondary.main"
            : "common.white",
      }}
      {...other}
    />
  );
}

Paper.propTypes = {
  background: PropTypes.oneOf(["light", "main", "dark"]),
};

export default Paper;
