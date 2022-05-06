import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSpring, animated } from "react-spring";
import theme from "./theme";

export default function withRoot(Component) {
  function WithRoot(props) {
    const { transform, opacity } = useSpring({
      from: { scale: 10, opacity: 0 },
      to: { scale: 150, opacity: 1 },
      config: { duration: 500 },
    });
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <animated.div style={{ transform, opacity }}>
          <Component {...props} />
        </animated.div>
      </ThemeProvider>
    );
  }

  return WithRoot;
}
