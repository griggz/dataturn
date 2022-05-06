import React from "react";
import MuiSnackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

function Transition(props) {
  return <Slide {...props} direction="down" />;
}

function Snackbar(props) {
  const { onClose, message, ...other } = props;

  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={6000}
      TransitionComponent={Transition}
      message={message}
      sx={{
        "& .MuiSnackbarContent-root": {
          backgroundColor: "secondary.main",
          fontSize: 14,
          flexWrap: "inherit",
        },
      }}
      action={
        <>
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={onClose}
            sx={{ p: 0.5 }}
          >
            <CloseIcon />
          </IconButton>
        </>
      }
      {...other}
    />
  );
}

export default Snackbar;
