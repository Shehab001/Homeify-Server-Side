import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import Tilt from "react-tilt";
import { AuthContext } from "../../Context/Context";
import DashboardButton from "../Small/DashboardButton";
import UserDashboard from "./User/UserDashboard";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Box>
        <Box
          sx={{
            mx: "auto",
            fontFamily: "jest",
            letterSpacing: "1px",
            fontSize: { md: "35px", xs: "20px" },
            position: "absolute",
            fontWeight: "bold",
            left: "50%",
            transform: "translate(-50%,0)",
            mt: 5,
            color: "#f6f6f4",
          }}
        >
          Welcome {user.displayName}
        </Box>
        {/* <Grid container height={"100vh"}>
          <Grid
            item
            xs={4}
            sm={2}
            sx={{ backgroundColor: "rgb(36 38 43)" }}
            pt={15}
          >
            <DashboardButton name={"My Products"}></DashboardButton>
          </Grid>
          <Grid
            item
            xs={8}
            sm={10}
            pt={16}
            sx={{ backgroundColor: "#f6f6f4", px: 1 }}
          ></Grid>
        </Grid> */}
      </Box>

      {/* user */}
      {/* <Box py={16} sx={{ backgroundColor: "rgb(36 38 43)", px: 2 }}>
        <UserDashboard></UserDashboard>
      </Box>
      <Divider color={"white"}></Divider> */}
    </>
  );
};

export default Dashboard;
