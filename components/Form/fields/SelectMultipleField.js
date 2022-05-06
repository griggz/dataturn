import React from "react";
import Input from "@mui/material/Input";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import TextField from "../../Elements/TextField";
import ListItemText from "@mui/material/ListItemText";
import { createTheme, MuiThemeProvider } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";

const StyledTextField = ({ ...other }) => <TextField {...other} />;

const theme = createTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "1em",
      },
    },
  },
});

export default function SelectMultiple({ onChange, value, values, ...other }) {
  return (
    <StyledTextField
      id="demo-mutiple-checkbox"
      select
      input={<Input />}
      SelectProps={{
        multiple: true,
        value: value,
        onChange: onChange,
        renderValue: (selected) => selected.join(", "),
      }}
      {...other}
    >
      {values.map((option) => (
        <MenuItem key={option.value} value={option.label}>
          <Checkbox checked={value.indexOf(option.label) > -1} />
          <MuiThemeProvider theme={theme}>
            <Tooltip title={option.toolTip} style={{ fontSize: "23px" }}>
              <ListItemText primary={option.label} />
            </Tooltip>
          </MuiThemeProvider>
        </MenuItem>
      ))}
    </StyledTextField>
  );
}
