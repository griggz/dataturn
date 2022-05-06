import { useSession } from "next-auth/react";
import CreateBlogPost from "../../../apps/blog/views/Create";
import PostNav from "../../../apps/blog/views/PostNav";
import WithNav from "../../../components/Layout/WithNav";
import NoAccess from "../../../apps/auth/NoAccess";
import ShowNothing from "../../../components/Layout/views/ShowNothing";

function Edit() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <ShowNothing />;
  }

  if (status === "unauthenticated" || !session.isAdmin) {
    return <NoAccess />;
  }

  return (
    <>
      <PostNav />
      <CreateBlogPost />
    </>
  );
}

export default WithNav(Edit);
