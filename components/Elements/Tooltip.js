import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

export default function MuiTooltip(props) {
  const { text, children } = props;

  return (
    <Tooltip
      title={text}
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 200 }}
    >
      {children}
    </Tooltip>
  );
}
