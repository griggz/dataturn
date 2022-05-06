import { Box } from "@mui/system";
import Button from "../../../components/Elements/Button";
import { useRouter, withRouter } from "next/router";

function PostNav() {
  const router = useRouter();
  return (
    <Box
      sx={{
        marginTop: 10,
        marginBottom: -15,
        flexGrow: 1,
        alignSelf: "center",
        textAlign: "center",
      }}
    >
      <Button
        onClick={() => router.push("/blog/create/")}
        variant="text"
        hover={"false"}
      >
        Create
      </Button>
    </Box>
  );
}

export default withRouter(PostNav);
