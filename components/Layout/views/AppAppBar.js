import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "@mui/material/Link";
import AppBar from "../AppBar";
import Toolbar from "../../Elements/Toolbar";
import Button from "../../Elements/Button";
import Box from "@mui/material/Box";
import ContactUsDialog from "./ContactUsDialog";
import { useRouter, withRouter } from "next/router";
import StackedMenu from "./StackedMenu";
import { CircularProgress } from "@mui/material";

function AppAppBar() {
  const [openContactForm, setOpenContactForm] = React.useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();
  if (status === "unauthenticated") {
    router.prefetch("/auth/signin/");
  }

  return (
    <Box>
      <AppBar
        sx={{
          transition: (theme) =>
            theme.transitions.create(["width", "margin"], {
              easing: (theme) => theme.transitions.easing.sharp,
              duration: (theme) => theme.transitions.duration.leavingScreen,
            }),
        }}
      >
        <Toolbar>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            sx={{
              fontSize: 14,
              fontWeight: 400,
              "&:hover": {
                color: "secondary.main",
              },
            }}
            href="/"
          >
            {"DATA-TURN"}
          </Link>
          <Box
            sx={{
              color: "primary.main",
              fontSize: { xs: 12, md: 16 },
              flex: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <StackedMenu
              options={[
                { title: "Blog", handleClick: () => router.push("/blog/") },
                {
                  title: "Contact-Us",
                  handleClick: () => setOpenContactForm(true),
                },
                {
                  title: session ? "Logout" : "Login",
                  handleClick: session
                    ? () => signOut()
                    : () =>
                        router.push("/auth/signin/", undefined, {
                          shallow: true,
                        }),
                },
              ]}
            />
          </Box>
          <Box
            sx={{
              color: "primary.main",
              fontSize: { xs: 12, md: 16 },
              flex: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Button
              onClick={() => router.push("/blog/")}
              variant="text"
              hover={"false"}
              sx={{ fontWeight: 300 }}
            >
              {"Blog"}
            </Button>
            <Button
              onClick={() => setOpenContactForm(true)}
              variant="text"
              hover={"false"}
              sx={{ fontWeight: 300, marginLeft: 2 }}
            >
              {"Contact-Us"}
            </Button>
            <Button
              onClick={
                session
                  ? () => signOut()
                  : () =>
                      router.push("/auth/signin/", undefined, { shallow: true })
              }
              variant="text"
              hover={"false"}
              sx={{ fontWeight: 300, marginLeft: 2 }}
            >
              {status === "authenticated" ? (
                "Logout"
              ) : status === "loading" ? (
                <CircularProgress size={20} />
              ) : status === "unauthenticated" ? (
                "Login"
              ) : (
                ""
              )}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <ContactUsDialog
        openContactForm={openContactForm}
        setOpenContactForm={setOpenContactForm}
      />
    </Box>
  );
}

AppAppBar.propTypes = {};

export default withRouter(AppAppBar);
