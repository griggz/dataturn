import React from "react";
import PropTypes from "prop-types";
import TextField from "../../Elements/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

function RFDateField(props) {
  const {
    label,
    dateValue,
    input,
    meta: { touched, error, submitError },
    ...other
  } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        clearable
        label={label}
        value={dateValue ? dateValue : null}
        {...other}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              error={Boolean(touched && (error || submitError))}
              {...input}
              {...other}
              helperText={touched ? error || submitError : ""}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
}

RFDateField.propTypes = {
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool.isRequired,
  }).isRequired,
};

export default RFDateField;
