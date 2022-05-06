import React from "react";
import { Box, Typography } from "@mui/material";
import Container from "../../components/Elements/Container";
import styles from "../../styles/Home.module.css";

function NoAccess() {
  return (
    <Container sx={{ height: "100vh" }}>
      <Box
        sx={{
          flexGrow: 1,
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "3.5rem",
            lineHeight: 1,
            letterSpacing: "-0.025em",
            fontWeight: 300,
            fontFamily: "Permanent Marker",
            margin: 0,
          }}
          className={styles.colorScale}
        >
          Access Denied!
        </Typography>
      </Box>
    </Container>
  );
}

export default NoAccess;
