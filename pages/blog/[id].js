import Container from "../../components/Elements/Container";
import PostMain from "../../apps/blog/components/PostMain";
import Box from "@mui/material/Box";
import WithNav from "../../components/Layout/WithNav";

function BlogPost() {
  return (
    <Container>
      <Box
        sx={{
          flexGrow: 1,
          marginTop: 15,
        }}
      >
        <PostMain />
      </Box>
    </Container>
  );
}

export default WithNav(BlogPost);
