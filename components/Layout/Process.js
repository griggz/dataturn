import React from "react";
import { Typography, Box } from "@mui/material";
import Container from "../Elements/Container";
import Grid from "@mui/material/Grid";

import { DatasetIcon, TerminalIcon, DashboardIcon } from "../Elements/SvgIcons";

function Process() {
  return (
    <Container
      sx={{
        paddingTop: "4rem",
        paddingBottom: "6rem",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: 300,
            marginTop: "1.25rem",
            marginBottom: "0.7rem",
            letterSpacing: "0.025em",
            fontSize: "3rem",
            lineHeight: "3rem",
            margin: 0,
            textAlign: "center",
            fontFamily: "Inter",
            opacity: 0.7,
            color: "secondary.main",
          }}
        >
          How it works
        </Typography>
        <Typography
          sx={{
            marginTop: "2.5rem",
          }}
        >
          Our approach in three stages
        </Typography>
      </Box>
      <Grid
        sx={{
          padding: "4rem",
          maxWidth: "80rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        container
        columnSpacing={{ xs: 1, md: 2 }}
        rowGap={{ xs: 5 }}
      >
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ paddingBottom: 0, textAlign: "center" }}
        >
          <DatasetIcon />
          <Typography
            sx={{
              letterSpacing: "0.025rem",
              textTransform: "uppercase",
              fontWeight: 600,
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
              marginTop: "2rem",
            }}
          >
            Flexible Database
          </Typography>
          <Typography
            sx={{
              marginTop: "2.5rem",
              fontSize: "0.9rem",
            }}
          >
            We make sense of your spreadsheets and build a <b>robust</b>{" "}
            relational database capable of <b>growing</b> with your data.
          </Typography>
          <Typography
            sx={{
              marginTop: "2.5rem",
              fontSize: "0.9rem",
              fontStyle: "italic",
            }}
          >
            We tailor the size and scope of your database based on your needs.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          sx={{ paddingBottom: 0, textAlign: "center" }}
        >
          <TerminalIcon />
          <Typography
            sx={{
              letterSpacing: "0.025rem",
              textTransform: "uppercase",
              fontWeight: 600,
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
              marginTop: "2rem",
            }}
          >
            Secure APIs
          </Typography>
          <Typography
            sx={{
              marginTop: "2.5rem",
              fontSize: "0.9rem",
            }}
          >
            We provide <b>secure</b> access to your data via custom APIs
            allowing your team to hook into your new database via tools like
            Tableau or PowerBi.
          </Typography>
          <Typography
            sx={{
              marginTop: "2.5rem",
              fontSize: "0.9rem",
              fontStyle: "italic",
            }}
          >
            Democratize your data or keep it to yourself, {`it's up to you.`}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}
          sx={{ paddingBottom: 0, textAlign: "center" }}
        >
          <DashboardIcon />
          <Typography
            sx={{
              letterSpacing: "0.025rem",
              textTransform: "uppercase",
              fontWeight: 600,
              fontSize: "0.875rem",
              lineHeight: "1.25rem",
              marginTop: "2rem",
            }}
          >
            Interactive Portals
          </Typography>
          <Typography
            sx={{
              marginTop: "2.5rem",
              fontSize: "0.9rem",
            }}
          >
            We design and develop <b>engaging</b>, <b>scalable</b>, websites
            driven by your data.
          </Typography>
          <Typography
            sx={{
              marginTop: "2.5rem",
              fontSize: "0.9rem",
              fontStyle: "italic",
            }}
          >
            Collaborate and automate processes with your team using a fresh
            interactive portal.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Process;
