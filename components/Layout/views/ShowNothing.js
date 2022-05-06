import React from "react";
import { Box } from "@mui/material";
import Container from "../../../components/Elements/Container";

function ShowNothing() {
  return (
    <Container sx={{ height: "100vh" }}>
      <Box
        sx={{
          flexGrow: 1,
          alignSelf: "center",
          textAlign: "center",
        }}
      ></Box>
    </Container>
  );
}

export default ShowNothing;
