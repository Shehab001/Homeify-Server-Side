import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";

import Home from "./Home";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>

      <Outlet></Outlet>
    </>
  );
};

export default Main;
