import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>

      <Outlet></Outlet>
    </>
  );
};

export default Main;
