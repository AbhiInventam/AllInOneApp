import { CssBaseline } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      <hr />
      <CssBaseline />
      <Outlet />
    </div>
  );
};

export default Home;
