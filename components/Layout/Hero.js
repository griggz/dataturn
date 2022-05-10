import React from "react";
import { Box, Typography } from "@mui/material";
import Container from "../Elements/Container";
import Bounce from "../Elements/Bounce";
import styles from "../../styles/Home.module.css";

function Hero() {
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
            fontWeight: "100",
            marginTop: "1.25rem",
            marginBottom: "0.75rem",
            letterSpacing: "0.025em",
            maxWidth: "48rem",
            textTransform: "uppercase",
            fontSize: "1rem",
            lineHeight: "1.25rem",
            marginLeft: "auto",
            marginRight: "auto",
            fontFamily: "Permanent Marker",
            paddingLeft: 2,
            paddingRight: 2,
            opacity: 0.7,
            color: "primary.dark",
          }}
        >
          Making Data management and analytics accessible
        </Typography>
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
          DataTurn
        </Typography>
      </Box>
      <Box
        sx={{
          justifyContent: "space-between",
          alightItems: "center",
          flexGrow: 1,
          width: "100%",
          display: "flex",
          right: 0,
          bottom: 0,
          position: "absolute",
        }}
      >
        <Bounce
          style={{
            alignSelf: "flex-start",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <svg
            style={{ width: 40, height: 40 }}
            aria-hidden="true"
            focusable="false"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="#29e3d6"
              fillOpacity="40%"
              d="M160 256.14l-56.51 56.47-96.44-96.15a23.77 23.77.0 01-.18-33.61l.18-.18 22.59-22.51a23.94 23.94.0 0133.85.0z"
            ></path>
            <path
              fill="currencolor"
              d="M313 182.57 290.21 160a23.94 23.94.0 00-33.85.0L103.47 312.61 143 352l.06.06a24 24 0 0033.93-.16L313 216.36l.18-.17a23.78 23.78.0 00-.18-33.62z"
            ></path>
          </svg>
        </Bounce>
      </Box>
    </Container>
  );
}

export default Hero;
