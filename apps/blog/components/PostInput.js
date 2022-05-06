import React, { useState, useEffect } from "react";
import { Field } from "react-final-form";
import { useRouter, withRouter } from "next/router";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import RFTextField from "../../../components/Form/fields/RFTextField";
import axios from "axios";
import CheckBox from "../../../components/Elements/CheckBox";
import RFDateField from "../../../components/Form/fields/RFDateField";
import AppFormInput from "../../../components/Form/views/AppFormInput";
import { UpperFirstLetter } from "../../../utils/Strings";

function PostForm({ formInitState }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState();
  const [isDraft, setIsDraft] = useState();
  const [publishDate, setPublishDate] = useState(null);
  const [post, setPost] = useState(formInitState);
  const scrollToTop = () => window.scrollTo(0, 0);
  const router = useRouter();
  const validateFields = ["title", "excerpt", "content"];

  const onSubmit = async (values) => {
    let res;
    let message;
    setSent(true);
    const data = {
      title: values.title,
      excerpt: values.excerpt,
      draft: isDraft,
      content: values.content,
    };

    if (post) {
      res = await axios.put(`/api/posts/${post.id}/`, data);
      message = (
        <>
          Your
          <Link href={`/blog/edit/${res.data.id}`} underline="none">
            {" "}
            post{" "}
          </Link>
          was succesfully updated.
        </>
      );
    } else {
      try {
        res = await axios.post("/api/posts/create/", data);
        message = (
          <>
            Your
            <Link href={`/blog/edit/${res.data.id}`} underline="none">
              {" "}
              post{" "}
            </Link>
            was succesfully created.
          </>
        );
        router.push(`/blog/edit/${res.data.id}`);
      } catch (error) {
        message = `Something went wrong. ${error.response.data.message}`;
      }
    }
    setSent(false);
    scrollToTop();

    return message;
  };

  const loadPosts = async () => {
    let post;

    if (router.query.id) {
      post = await axios
        .get(`/api/posts/${router.query.id}`)
        .then((r) => r.data);
      console.log(post);
      // update post state
      setPost({
        id: post.id,
        title: post.title
          .split("-")
          .map((s) => {
            return UpperFirstLetter(s);
          })
          .join(" "),
        content: post.content,
        image: post.image,
        tags: post.tags,
        excerpt: post.excerpt,
        draft: post.draft,
      });
    }
  };

  useEffect(() => {
    if (router.isReady) {
      if (formInitState) {
        setLoading(false);
      } else {
        loadPosts();
        setLoading(false);
      }
    }
  }, [formInitState, router.isReady]);

  return loading ? (
    ""
  ) : (
    <>
      <AppFormInput
        title={post ? "Edit Blog Post" : "Create a new Blog Post"}
        submitText={"Save"}
        handleSubmit={onSubmit}
        initialState={post}
        validateFields={validateFields}
        paper={false}
        preview={true}
      >
        <Grid item xs={6} sx={{ marginTop: "auto", marginBottom: "auto" }}>
          <CheckBox checked={isDraft} setChecked={setIsDraft} text={"Draft"} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            fullWidth
            size="large"
            dateValue={publishDate}
            component={RFDateField}
            disabled={sent}
            onChange={(v) => setPublishDate(v)}
            name="publishDate"
            autoComplete="publishDate"
            label="Publish Date"
            margin="none"
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            fullWidth
            size="large"
            component={RFTextField}
            disabled={sent}
            required
            name="title"
            autoComplete="title"
            label="Post Title"
            margin="none"
            autoFocus
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            fullWidth
            size="large"
            component={RFTextField}
            disabled={sent}
            name="excerpt"
            required
            autoComplete="excerpt"
            label="Post Excerpt"
            margin="none"
            multiline
            minRows={5}
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            fullWidth
            size="large"
            component={RFTextField}
            disabled={sent}
            name="content"
            required
            autoComplete="content"
            label="Post Content"
            margin="none"
            multiline
            minRows={25}
          />
        </Grid>
      </AppFormInput>
    </>
  );
}

export default withRouter(PostForm);
