import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const IsLoading = ({ thickness, size, color, ...other }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      padding: 15,
    }}
  >
    <CircularProgress
      color={color ? color : "secondary"}
      // variant="indeterminate"
      // disableShrink
      size={size ? size : 40}
      thickness={thickness ? thickness : 6}
      {...other}
    />
  </Box>
);

export default IsLoading;
