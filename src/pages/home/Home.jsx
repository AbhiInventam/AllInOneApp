import React from "react";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      <hr />
      <Outlet />
    </div>
  );
};

export default Home;
