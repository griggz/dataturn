import { withRouter } from "next/router";
// --- Post bootstrap -----
import React from "react";
import Hero from "../components/Layout/Hero";
import Process from "../components/Layout/Process";
import WithNav from "../components/Layout/WithNav";

function Index() {
  return (
    <>
      <Hero />
      <Process />
    </>
  );
}

export default WithNav(withRouter(Index));
