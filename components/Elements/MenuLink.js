import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";

const MenuLink = ({ title, url }) => {
  return (
    <Link underline="none" color="inherit" href={url}>
      <MenuItem>{title}</MenuItem>
    </Link>
  );
};

export default MenuLink;
