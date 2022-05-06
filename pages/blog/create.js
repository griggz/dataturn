import { useSession } from "next-auth/react";
import CreateBlogPost from "../../apps/blog/views/Create";
import WithNav from "../../components/Layout/WithNav";
import NoAccess from "../../apps/auth/NoAccess";
import ShowNothing from "../../components/Layout/views/ShowNothing";

function Create() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <ShowNothing />;
  }

  if (status === "unauthenticated" || !session.isAdmin) {
    return <NoAccess />;
  }

  return <CreateBlogPost />;
}

export default WithNav(Create);
