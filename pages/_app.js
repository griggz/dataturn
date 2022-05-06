import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useSpring, animated } from "react-spring";
import { CacheProvider } from "@emotion/react";
import theme from "../components/Layout/theme";
import createEmotionCache from "../styles/createEmotionCache";
import { SessionProvider } from "next-auth/react";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps },
}) {
  const { transform, opacity } = useSpring({
    from: { scale: 10, opacity: 0 },
    to: { scale: 150, opacity: 1 },
    config: { duration: 200 },
  });

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Data-Turn</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <animated.div style={{ transform, opacity }}>
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
        </animated.div>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
