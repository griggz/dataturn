import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter, withRouter } from "next/router";
import Post from "../../components/views/Post";
import Container from "../../components/prebuilt/Container";

import CircularProgress from "@material-ui/core/CircularProgress";

function Read() {
  const [post, setPost] = useState();
  const [doneLoading, setDoneLoading] = useState();

  const router = useRouter();

  const loadPosts = async () => {
    let article;
    if (router.query.title) {
      article = await axios
        .get(`/api/posts/post/${router.query.title}`)
        .then((r) => r.data);
    }

    setPost(article);
  };

  useEffect(() => {
    async function load() {
      await loadPosts();
      setDoneLoading(true);
    }
    // Load
    load();
  }, []);

  if (!doneLoading) {
    return (
      <Container>
        <CircularProgress color="secondary" size="2.5rem" thickness={2} />
      </Container>
    );
  }
  return (
    <>
      {!post.draft ? (
        <Post posts={post} list={false} />
      ) : (
        <p>Post does not exist or is under revision</p>
      )}
    </>
  );
}

export default withRouter(Read);

// Added the following so the page retains its url query on page refresh (no idea why this is needed...)
export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
