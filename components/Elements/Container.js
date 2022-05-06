import { Box } from "@mui/system";

const Container = ({ children, sx }) => (
  <Box
    sx={{
      ...sx,
      paddingLeft: { sm: 6, lg: 8 },
      paddingRight: { sm: 6, lg: 8 },
      maxWidth: 1400,
      marginRight: "auto",
      marginLeft: "auto",
      position: "relative",
      display: "flex",
      flexWrap: "wrap",
    }}
  >
    {children}
  </Box>
);

export default Container;
