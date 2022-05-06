import { withRouter } from "next/router";
import Container from "../../components/Elements/Container";
import PostMainList from "../../apps/blog/components/PostMainList";
import Box from "@mui/material/Box";
import WithNav from "../../components/Layout/WithNav";

function Blog() {
  return (
    <Container>
      <Box
        sx={{
          flexGrow: 1,
          marginTop: 15,
        }}
      >
        <PostMainList />
      </Box>
    </Container>
  );
}

export default WithNav(withRouter(Blog));
