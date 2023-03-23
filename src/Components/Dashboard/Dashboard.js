import { HiveTwoTone } from "@mui/icons-material";
import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import Tilt from "react-tilt";
import { AuthContext } from "../../Context/Context";
import DashboardButton from "../Small/DashboardButton";
import Loader from "../Small/Loader/Loader";
import AdminDashboard from "./Admin/AdminDashboard";
import SellerDashboard from "./Seller/SellerDashboard";
import UserDashboard from "./User/UserDashboard";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [spin, setSpin] = useState(false);
  const [cart, setCart] = useState([]);
  console.log(cart);

  return (
    <>
      {/* <SellerDashboard></SellerDashboard> */}
      {/* <UserDashboard></UserDashboard> */}
      <AdminDashboard></AdminDashboard>
      {/* <Box sx={{ backgroundColor: "rgb(36 38 43)", pb: 20 }}>
        <Box
          sx={{
            fontFamily: "jest",
            letterSpacing: "1px",
            fontSize: { md: "35px", xs: "20px" },
            fontWeight: "bold",
            pt: 5,
            py: 5,
            color: "#f6f6f4",
            textTransform: "uppercase",
          }}
        >
          Welcome {user.displayName}
        </Box>
        <Box>
          {spin === true ? (
            <Box py={20}>
              <Loader></Loader>
            </Box>
          ) : (
            <>
              <UserDashboard product={cart}></UserDashboard>
            </>
          )}
        </Box>
       
      {/* </Box> */}

      <Divider color={"white"}></Divider>
    </>
  );
};

export default Dashboard;
