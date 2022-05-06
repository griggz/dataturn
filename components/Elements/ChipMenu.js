/* eslint-disable no-use-before-define */
import React from "react";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "./TextField";

export default function ChipMenu({ handleChange, options, title, ...other }) {
  const cleanOptions = Object.keys(options)
    .sort((a, b) => a.localeCompare(b))
    .map((v) => ({
      title: options[v].label,
      value: options[v].key_,
    }));

  return (
    <>
      <Autocomplete
        multiple
        id="tags-filled"
        options={cleanOptions}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        getOptionLabel={(option) => option.title}
        defaultValue={[]}
        filterSelectedOptions
        onChange={(event, newValue) => {
          handleChange(newValue);
        }}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              key={index}
              color="secondary"
              label={option.title}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder={`Select ${title}`}
          />
        )}
        {...other}
      />
    </>
  );
}
