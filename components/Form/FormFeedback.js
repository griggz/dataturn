import React from "react";
import PropTypes from "prop-types";
import Typography from "../Elements/Typography";
import { Box } from "@mui/system";

function FormFeedback(props) {
  const { error } = props;

  return (
    <Box
      sx={{
        padding: 2,
        backgroundColor: error
          ? (theme) => theme.palette.error.xLight
          : (theme) => theme.palette.error.dark,
        color: error
          ? (theme) => theme.palette.error.xLight
          : (theme) => theme.palette.success.dark,
      }}
    >
      <Typography color="inherit">{props.children}</Typography>
    </Box>
  );
}

FormFeedback.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
};

export default FormFeedback;
