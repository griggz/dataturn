import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Typography from "../Elements/Typography";
import ContactUsDialog from "./views/ContactUsDialog";
import Button from "../Elements/Button";

export default function Footer() {
  const [openContactForm, setOpenContactForm] = useState(false);
  return (
    <footer style={{ backgroundColor: "#F7F9FF" }}>
      <h2
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: -1,
          overflow: "hidden",
          whiteSpace: "nowrap",
          borderWidth: 0,
          clip: "rect(0, 0, 0, 0)",
        }}
      >
        Footer
      </h2>
      <Box
        sx={{
          paddingLeft: "2rem",
          paddingRight: "2rem",
          paddingTop: "4rem",
          paddingBottom: "4rem",
          maxWidth: "80rem",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Grid container>
          <Grid item xs={6}>
            <Typography
              sx={{
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontWeight: 600,
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                opacity: 0.8,
              }}
            >
              Data-Turn
            </Typography>
            <Typography
              sx={{
                letterSpacing: "0.05em",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                opacity: 0.8,
                marginTop: 2,
              }}
            >
              Making Data management and analytics accessible
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button
              sx={{
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                fontWeight: 600,
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                opacity: 0.8,
              }}
              onClick={() => setOpenContactForm(true)}
              variant="text"
              hover="false"
            >
              Contact-Us
            </Button>
          </Grid>
        </Grid>

        <Box
          sx={{
            paddingTop: "2rem",
            marginTop: "3rem",
            borderTop: 1,
            borderWidth: "1px",
            borderColor: "#E2E8F0",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "0.9rem",
              flexDirection: "column",
              display: "flex",
              opacity: 0.6,
              // lineHeight: "1.5rem",
            }}
          >
            <span>Copyright © 2022. All Rights Reserved.</span>
            <span
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                lineHeight: "inherit",
              }}
            >
              Powered By
              <a
                style={{ marginLeft: "0.25rem", opacity: 1, color: "#000" }}
                href="https://vercel.com"
                title="Go to the Vercel website"
              >
                <svg
                  viewBox="0 0 4438 1e3"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height={70}
                  width={70}
                >
                  <path
                    d="M2223.75 250c-172.5.0-296.88 112.5-296.88 281.25S2066.72 812.5 2239.38 812.5c104.21.0 196.09-41.25 252.96-110.781L2372.81 632.656C2341.25 667.188 2293.28 687.344 2239.38 687.344 2164.53 687.344 2100.94 648.281 2077.34 585.781h437.82C2518.59 568.281 2520.63 550.156 2520.63 531.094 2520.63 362.5 2396.41 250 2223.75 250zM2076.09 476.562C2095.62 414.219 2149.06 375 2223.75 375 2298.59 375 2352.03 414.219 2371.41 476.562H2076.09zM2040.78 78.125l-432.97 750-433.12-750h162.34l270.63 468.75 270.62-468.75h162.5zM577.344.0 1154.69 1e3H0L577.344.0zM3148.75 531.25C3148.75 625 3210 687.5 3305 687.5 3369.38 687.5 3417.66 658.281 3442.5 610.625L3562.5 679.844C3512.81 762.656 3419.69 812.5 3305 812.5c-172.66.0-296.87-112.5-296.87-281.25S3132.5 250 3305 250c114.69.0 207.66 49.844 257.5 132.656l-120 69.219C3417.66 404.219 3369.38 375 3305 375 3210.16 375 3148.75 437.5 3148.75 531.25zM4437.5 78.125v718.75H4296.88V78.125H4437.5zM3906.25 250c-172.5.0-296.87 112.5-296.87 281.25s140 281.25 312.5 281.25c104.21.0 196.09-41.25 252.96-110.781L4055.31 632.656C4023.75 667.188 3975.78 687.344 3921.88 687.344 3847.03 687.344 3783.44 648.281 3759.84 585.781h437.82C4201.09 568.281 4203.12 550.156 4203.12 531.094 4203.12 362.5 4078.91 250 3906.25 250zM3758.59 476.562C3778.13 414.219 3831.41 375 3906.25 375s128.28 39.219 147.66 101.562H3758.59zM2961.25 265.625V417.031C2945.63 412.5 2929.06 409.375 2911.25 409.375 2820.47 409.375 2755 471.875 2755 565.625v231.25H2614.38V265.625H2755v143.75C2755 330 2847.34 265.625 2961.25 265.625z"
                    fill="currentcolor"
                  ></path>
                </svg>
              </a>
            </span>
          </Box>
        </Box>
        <ContactUsDialog
          openContactForm={openContactForm}
          setOpenContactForm={setOpenContactForm}
        />
      </Box>
    </footer>
  );
}
