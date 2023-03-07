import React from "react";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

import Home from "./Home";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
