import React from "react";
import ReactMarkdown from "markdown-to-jsx";
import Typography from "./Typography";
import { Link } from "@mui/material";
import Image from "next/image";

const options = {
  overrides: {
    h1: {
      component: (props) => <Typography gutterBottom variant="h3" {...props} />,
    },
    h2: {
      component: (props) => <Typography gutterBottom variant="h4" {...props} />,
    },
    h3: {
      component: (props) => <Typography gutterBottom variant="h6" {...props} />,
    },
    h4: {
      component: (props) => (
        <Typography gutterBottom variant="subtitle1" paragraph {...props} />
      ),
    },
    p: {
      component: (props) => (
        <Typography
          paragraph
          style={{ fontSize: 20, display: "inline-block" }}
          {...props}
        />
      ),
    },
    a: {
      component: (props) => (
        <Link
          color="secondary"
          style={{ fontWeight: "bold", textDecoration: "none" }}
          {...props}
        />
      ),
    },
    ul: {
      component: (props) => <ul style={{ marginLeft: 25 }} {...props} />,
    },
    li: {
      component: (props) => <li style={{ fontSize: 20 }} {...props} />,
    },
    img: {
      component: (props) => (
        <Image {...props} width={1000} height={600} alt={"img"} />
      ),
    },
  },
};

function Markdown(props) {
  return <ReactMarkdown options={options} {...props} />;
}

export default Markdown;
