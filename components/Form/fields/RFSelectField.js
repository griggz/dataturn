import React from "react";
import PropTypes from "prop-types";
import MenuItem from "@mui/material/MenuItem";
import TextField from "../../Elements/TextField";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/material";

const StyledTextField = ({ ...other }) => <TextField {...other} />;

function RFSelectField(props) {
  const {
    autoFocus,
    input,
    InputProps,
    sortData,
    values,
    toolTips,
    meta: { touched, error, submitError },
    ...other
  } = props;

  return (
    <StyledTextField
      error={Boolean(touched && (error || submitError))}
      {...input}
      {...other}
      InputProps={{
        inputProps: {
          autoFocus,
        },
        ...InputProps,
      }}
      helperText={touched ? error || submitError : ""}
    >
      {sortData
        ? values
            .sort((a, b) => a.label.localeCompare(b.label))
            .map((option) =>
              toolTips ? (
                <MenuItem
                  autoFocus={false}
                  key={option.value}
                  value={option.value}
                  sx={{ fontSize: 18 }}
                >
                  <Tooltip title={option.toolTip} key={option.value}>
                    <Box>{option.label}</Box>
                  </Tooltip>
                </MenuItem>
              ) : (
                <MenuItem
                  autoFocus={false}
                  key={option.value}
                  value={option.value}
                  sx={{ fontSize: 18 }}
                >
                  {option.label}
                </MenuItem>
              )
            )
        : values.map((option) =>
            toolTips ? (
              <MenuItem
                autoFocus={false}
                key={option.value}
                value={option.value}
                sx={{ fontSize: 18 }}
              >
                <Tooltip title={option.toolTip} key={option.value}>
                  <Box>{option.label}</Box>
                </Tooltip>
              </MenuItem>
            ) : (
              <MenuItem
                autoFocus={false}
                key={option.value}
                value={option.value}
                sx={{ fontSize: 18 }}
              >
                {option.label}
              </MenuItem>
            )
          )}
    </StyledTextField>
  );
}

RFSelectField.propTypes = {
  autoFocus: PropTypes.string,
  input: PropTypes.object.isRequired,
  InputProps: PropTypes.object,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool.isRequired,
  }).isRequired,
};

export default RFSelectField;
