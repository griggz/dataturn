import MuiButton from "@mui/material/Button";

function Button(props) {
  const { size, sx, color, hover, ...other } = props;
  return (
    <MuiButton
      sx={{
        ...sx,
        "&.MuiButton-root": {
          fontWeight: sx && sx.fontWeight ? sx.fontWeight : 500,
          borderRadius: 0,
          fontFamily: (theme) => theme.typography.fontFamilySecondary,
          fontSize: { xs: 12, md: 14 },
          boxShadow: "none",
          "&:active, &:focus": {
            boxShadow: "none",
          },
          "&:hover": {
            backgroundColor:
              hover !== "false" ? `${color}.main` : "transparent",
            textDecoration: "none",
            color: hover !== "false" ? `common.white` : "secondary.main",
            border: "none",
            boxShadow: hover
              ? hover
              : "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          },
        },
        color: color,
        padding:
          size && size === "large"
            ? (theme) => theme.spacing(2, 5)
            : size && size === "small"
            ? (theme) => theme.spacing(1, 3)
            : (theme) => theme.spacing(1, 1),
        fontSize:
          size && size === "large"
            ? (theme) => theme.typography.pxToRem(16)
            : size && size === "small"
            ? (theme) => theme.typography.pxToRem(13)
            : (theme) => theme.typography.pxToRem(13),
      }}
      {...other}
    />
  );
}

export default Button;
