import React, { useEffect, useState } from "react";

import { Grid } from "@mui/material";
import Typography from "../../../components/Elements/Typography";
import Markdown from "../../../components/Elements/Markdown";
import { Box } from "@mui/system";
import axios from "axios";
import { CircularProgress } from "@mui/material";

import { useRouter, withRouter } from "next/router";
// import Button from "../../../components/Elements/Button";
import { UpperFirstLetter } from "../../../utils/Strings";

const fancyContent = ({ content }) => {
  const re = "^(.*?)\\n";
  const intro = content.match(re)[0];
  const outro = content.split(intro)[1];

  const fancy = `<div><p style="font-family: Permanent Marker; font-size: 150px; margin-top: -110px; height: 155px; float: left; padding: 10px">${intro.slice(
    0,
    1
  )}</p><p style="font-size: 20px">${intro.slice(1)}</p></div>`;

  return fancy + outro;
};

function Main() {
  const router = useRouter();
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);

  const [fancyText, setFancyText] = useState();

  const loadPosts = async () => {
    const post = await axios
      .get(`/api/posts/${router.query.id}`)
      .then((r) => r.data);

    const fancy = fancyContent({
      content: post.content,
    });
    setPost(post);
    setFancyText(fancy);
  };

  useEffect(() => {
    async function load() {
      await loadPosts();
      setLoading(false);
    }
    // Load
    if (router.isReady) {
      load();
    }
  }, [router.isReady]);

  if (loading) {
    return (
      <Box sx={{ height: "100vh" }}>
        <Box sx={{ flexGrow: 1, alignSelf: "center", textAlign: "center" }}>
          <CircularProgress />
        </Box>
      </Box>
    );
  }

  return (
    <>
      {/* <Grid xs={12} md={8} sx={{ margin: 0, padding: 0 }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => router.push(`/posts/${post.id}`)}
        >
          Edit
        </Button>
      </Grid> */}
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          maxWidth: 900,
          marginBottom: 10,
          display: "flex",
          whiteSpace: "pre-wrap",
        }}
      >
        <Typography
          component="div"
          sx={{
            alignSelf: { xs: "center", md: "left" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box
            sx={{
              fontWeight: 900,
              fontSize: 54,
              color: "secondary.main",
              letterSpacing: "0.015em",
            }}
          >
            {" "}
            {post.title
              .split("-")
              .map((s) => {
                return UpperFirstLetter(s);
              })
              .join(" ")}
          </Box>
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          maxWidth: 900,
          margin: (theme) => `${theme.spacing(1)}px auto`,
          padding: (theme) => theme.spacing(2),
          display: "flex",
          whiteSpace: "pre-wrap",
        }}
      >
        <Markdown sx={{ padding: (theme) => theme.spacing(1, 0) }}>
          {fancyText}
        </Markdown>
      </Grid>
    </>
  );
}

export default withRouter(Main);
