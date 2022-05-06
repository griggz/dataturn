import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/system";

export default function CheckBox({ text, setChecked, checked, ...other }) {
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box sx={{ marginTop: 4 }}>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={handleChange}
            name="checkBox"
            color="primary"
            {...other}
          />
        }
        label={text}
      />
    </Box>
  );
}
