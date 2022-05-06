import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import Link from "next/link";
import { Divider, Box } from "@mui/material";
import { UpperFirstLetter } from "../../../utils/Strings";
import { useRouter, withRouter } from "next/router";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import moment from "moment";

import Paginate from "../../../components/Elements/Pagination";
import Typography from "../../../components/Elements/Typography";

function truncString(str, n) {
  if (str.length > n) {
    return str.substring(0, n) + "...";
  } else {
    return str;
  }
}

const LineItem = ({ post }) => (
  <Box sx={{ maxWidth: 800 }}>
    <Link href={`blog/${post.id}`}>
      <a style={{ textDecoration: "none" }}>
        <Typography component="div">
          <Box
            sx={{
              fontWeight: 500,
              m: 2,
              color: "secondary.main",
              fontSize: 36,
            }}
          >
            {post.title
              .split("-")
              .map((s) => {
                return UpperFirstLetter(s);
              })
              .join(" ")}
          </Box>
        </Typography>
      </a>
    </Link>
    <Box
      sx={{
        justifyContent: "space-between",
        alightItems: "center",
        flexGrow: 1,
        width: "100%",
        display: "flex",
      }}
    >
      <Typography component="div">
        <Box sx={{ fontWeight: 300, ml: 2, fontSize: 14 }}>
          Published on{" "}
          <b style={{ fontWeight: 500 }}>
            {post.publishedAt
              ? moment(post.publishedAt).format("MMM DD, YYYY")
              : moment(post.createdAt).format("MMM DD, YYYY")}
          </b>
        </Box>
      </Typography>
    </Box>

    <Typography component="div">
      <Box sx={{ fontWeight: 300, m: 2, fontSize: 14 }}>
        {truncString(post.excerpt, 300)}
      </Box>
    </Typography>

    <Divider sx={{ m: 2 }} />
  </Box>
);

LineItem.propTypes = {
  post: PropTypes.object,
  classes: PropTypes.object,
};

function MainList({ posts }) {
  const router = useRouter();
  const [postList, setPosts] = useState(posts);
  const [loading, setLoading] = useState(true);

  // pagination
  const postsPerPage = 10;
  const [total, setTotal] = useState();
  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [postsDisplay, setPostsDisplay] = useState();
  const handleSlideRight = () => slide(1);
  const handleSlideLeft = () => slide(-1);

  const slide = (offset) => {
    const newIndex = Math.min(Math.max(index + offset, 0), total);
    const newPage = Math.min(Math.max(page + offset, 0), total);
    setIndex(newIndex);
    setPage(newPage);
    setPostsDisplay(
      posts.slice(postsPerPage * (newPage - 1), postsPerPage * newPage)
    );
  };

  const loadPosts = async () => {
    const posts = await axios.get("/api/posts/").then((r) => r.data);
    setPostsDisplay(
      posts.slice(postsPerPage * (page - 1), postsPerPage * page)
    );
    setTotal(Math.ceil(posts.length / postsPerPage));

    setPosts(posts);
  };

  useEffect(() => {
    async function load() {
      await loadPosts();
      setLoading(false);
    }
    // Load
    load();
  }, []);

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
      <Grid item xs={12} md={8}>
        {postsDisplay.length > 0 ? (
          postsDisplay.map(
            (post, index) =>
              !post.draft && (
                <LineItem post={post} router={router} key={index} />
              )
          )
        ) : (
          <p>No posts!</p>
        )}
        <Paginate
          index={index}
          total={total}
          handleSlideLeft={handleSlideLeft}
          handleSlideRight={handleSlideRight}
        />
      </Grid>
    </>
  );
}

MainList.propTypes = {
  posts: PropTypes.array,
};

export default withRouter(MainList);
