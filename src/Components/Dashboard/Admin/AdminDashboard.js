import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Context/Context";

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const [route, setRoute] = useState(0);
  return (
    <Box>
      <Box mx={10}>
        <Typography
          sx={{
            fontFamily: "jest",
            letterSpacing: "1px",
            fontSize: { md: "35px", xs: "20px" },
            fontWeight: "bold",
            color: "Black4",
            textDecoration: "underline",
            fontStyle: "italic",
            my: 5,
          }}
        >
          Welcome {user.displayName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "jest",
              letterSpacing: "1px",
              fontSize: { md: "20px", xs: "16px" },
              fontWeight: "bold",
              color: "Black4",

              textAlign: "start",
            }}
          >
            {/* {route === 0 ? "All Seller" : "All Product"} */}
            {route === 1
              ? "All Seller"
              : route === 2
              ? "Reported Items"
              : "All User"}
          </Typography>
          <Box display={"flex"}>
            <Button
              variant="contained"
              size="small"
              sx={{
                fontFamily: "jest",
                letterSpacing: "1px",
                backgroundColor: "#222222",
                "&:hover": {
                  background: "#6e3e37",
                },
                fontSize: "10px",
                mr: 1,
              }}
              onClick={() => {
                setRoute(0);
              }}
            >
              All User
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{
                fontFamily: "jest",
                letterSpacing: "1px",
                backgroundColor: "#222222",
                "&:hover": {
                  background: "#6e3e37",
                },
                fontSize: "10px",
              }}
              onClick={() => {
                setRoute(1);
              }}
            >
              Add Seller
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{
                fontFamily: "jest",
                letterSpacing: "1px",
                backgroundColor: "#222222",
                "&:hover": {
                  background: "#6e3e37",
                },
                fontSize: "10px",
                ml: 1,
              }}
              onClick={() => {
                setRoute(2);
              }}
            >
              Reported Items
            </Button>
          </Box>
        </Box>

        <Divider sx={{ color: "black", mt: 1, mb: 5 }}></Divider>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
