import React from "react";
import PropTypes from "prop-types";
import MuiTextField from "@mui/material/TextField";
import { InputLabel } from "@mui/material";

function TextField(props) {
  const {
    InputProps = {},
    InputLabelProps,
    SelectProps,
    children,
    label,
    error,
    ...other
  } = props;

  const {
    sx: { input: InputPropsClassesInput, ...InputPropsClassesOther } = {},
    ...InputPropsOther
  } = InputProps;

  return (
    <>
      {label !== false ? (
        <InputLabel
          error={error}
          sx={{ marginTop: 4, marginBottom: 1, left: 0 }}
        >
          {label}
        </InputLabel>
      ) : (
        ""
      )}
      <MuiTextField
        variant="outlined"
        color="secondary"
        error={error}
        InputProps={{
          sx: {
            padding: 1,
            backgroundColor: (theme) => theme.palette.common.white,
            borderRadius: 0,
            disabled: {},
            "& .MuiInputAdornment-root": {
              padding: "12px",
            },
            input: {
              minWidth: 6,
              margin: 0,
              fontSize: 16,
              InputPropsClassesInput,
              "&$disabled": {
                backgroundiColor: (theme) => theme.palette.divider,
              },
            },
            ...InputPropsClassesOther,
          },
          ...InputPropsOther,
        }}
        InputLabelProps={{
          ...InputLabelProps,
          shrink: false,
          variant: "standard",
          sx: {
            fontSize: 16,
            position: "relative",
          },
        }}
        FormHelperTextProps={{
          sx: {
            marginLeft: 0,
          },
        }}
        SelectProps={{
          ...SelectProps,
          sx: {
            minHeight: "auto",
            padding: 0.8,
            backgroundColor: (theme) => theme.palette.common.white,
            borderRadius: 0,
          },
        }}
        {...other}
      >
        {children}
      </MuiTextField>
    </>
  );
}

TextField.propTypes = {
  InputLabelProps: PropTypes.object,
  InputProps: PropTypes.object,
  noBorder: PropTypes.bool,
  SelectProps: PropTypes.object,
  size: PropTypes.oneOf(["small", "medium", "large", "xlarge"]),
};

export default TextField;
