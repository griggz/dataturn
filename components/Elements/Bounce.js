import React, { useEffect } from "react";
import { useSpring, animated, easings } from "react-spring";

export default function Bounce({ children, style }) {
  const [styles, api] = useSpring(() => ({
    from: {
      y: -10,
      x: 0,
      opacity: 1,
    },
  }));

  useEffect(() => {
    api.start({
      // x: 50,
      y: 1,
      x: 0,
      opacity: 1,
      loop: { reverse: true },
      // delay: 10,
      config: {
        mass: 1,
        tension: 170,
        friction: 26,
        precision: 0.01,
        // velocity: 200,
        bounce: 1,
        duration: 500,
        easeing: easings.easeInBounce,
        clamp: true,
        // damping: 1,
      },
    });
  }, [api]);

  return (
    <animated.div style={{ ...style, ...styles }}>{children}</animated.div>
  );
}
