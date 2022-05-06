import React from "react";
import PropTypes from "prop-types";
import MuiTypography from "@mui/material/Typography";
import { Box } from "@mui/system";

const variantMapping = {
  h1: "h1",
  h2: "h1",
  h3: "h1",
  h4: "h1",
  h5: "h3",
  h6: "h4",
  subtitle1: "h3",
};

function Typography(props) {
  const { children, marked = false, variant, ...other } = props;

  return (
    <MuiTypography variantMapping={variantMapping} variant={variant} {...other}>
      {children}
      {marked ? (
        <Box
          component="span"
          sx={{
            height: 4,
            width: 100,
            display: "block",
            margin: `auto`,
            marginTop: "15px",
            backgroundColor: "secondary.main",
          }}
        />
      ) : null}
    </MuiTypography>
  );
}

Typography.propTypes = {
  children: PropTypes.node,
  marked: PropTypes.oneOf([false, "center", "left"]),
  variant: PropTypes.string,
};

export default Typography;
