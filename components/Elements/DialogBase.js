import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "./Button";
import { Box } from "@mui/system";

export default function DialogBase({
  open,
  setOpen,
  title,
  contentText,
  children,
  ...other
}) {
  const handleClose = () => {
    setOpen(false);
  };
  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      {...other}
      PaperProps={{
        style: {
          backgroundImage: "url(" + "/images/SGrid.svg" + ")",
          backgroundColor: "#fbfbff",
          maxWidth: "800px",
        },
      }}
    >
      <Box sx={{ flex: 1, display: "flex", justifyContent: "space-between" }}>
        <DialogTitle>{title}</DialogTitle>
        <Button hover="false" onClick={() => setOpen(false)} size="large">
          Close
        </Button>
      </Box>
      <DialogContent>
        <DialogContentText>{contentText}</DialogContentText>
        {children}
      </DialogContent>
    </Dialog>
  );
}
