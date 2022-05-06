import MuiToolbar from "@mui/material/Toolbar";

function Toolbar(props) {
  const { ...other } = props;
  return (
    <MuiToolbar
      sx={{
        height: { xs: 64, sm: 70, md: 64 },
      }}
      {...other}
    />
  );
}

export default Toolbar;
