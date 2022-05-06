import React from "react";

export default function defer(Component) {
  const Defer = (props) => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
    }, []);

    if (mounted === true) {
      return <Component mounted={mounted} {...props} />;
    } else {
      return "";
    }
  };

  return Defer;
}
