import React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Paper from "./Paper";
import theme from "../Layout/theme";

export default function Header({ sections }) {
  return (
    <Paper variant="outlined">
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          justifyContent: "space-between",
          overflowX: "auto",
        }}
      >
        {sections.map((section, idx) => (
          <Link
            color="inherit"
            noWrap
            key={idx}
            variant="body2"
            href={section.url}
            sx={{
              padding: theme.spacing(1),
            }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </Paper>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
