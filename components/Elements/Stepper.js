import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "./Button";
import Typography from "@mui/material/Typography";

function VerticalStepper({ steps, setState }) {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label || index} active>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              {step.subLabel ? (
                <Typography
                  sx={{ fontStyle: "italic", textDecoration: "underline" }}
                >
                  Date Enacted: {step.subLabel}
                </Typography>
              ) : (
                ""
              )}
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => setState(step.data)}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Learn More
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default VerticalStepper;
