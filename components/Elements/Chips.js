import React from "react";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/system";

export default function Chips({ handleClick, chipOptions, sx, ...other }) {
  return (
    chipOptions && (
      <Box sx={{ ...sx }}>
        {Object.keys(chipOptions).map((k, index) => (
          <Chip
            sx={{ margin: 0.5 }}
            key={index}
            label={chipOptions[k].label}
            color={chipOptions[k].value === false ? "primary" : "primary"}
            variant={chipOptions[k].value === false ? "outlined" : "filled"}
            onClick={handleClick ? () => handleClick(chipOptions[k]) : null}
            {...other}
          />
        ))}
      </Box>
    )
  );
}
