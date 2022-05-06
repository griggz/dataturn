import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ITEM_HEIGHT = 48;

export default function StackedMenu({ options }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = ({ handleClick }) => {
    setAnchorEl(null);
    if (handleClick) {
      handleClick();
    }
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "15ch",
            backgroundImage: "url(" + "/images/SGrid.svg" + ")",
            backgroundColor: "#fbfbff",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.title}
            onClick={() => handleClose({ handleClick: option.handleClick })}
          >
            {option.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
