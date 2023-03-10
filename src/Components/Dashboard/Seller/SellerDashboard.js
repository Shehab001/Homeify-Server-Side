import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import Tilt from "react-tilt";
import { AuthContext } from "../../../Context/Context";
import DashboardButton from "../../Small/DashboardButton";
import SellerAddProduct from "./SellerAddProduct";
import SellerProduct from "./SellerProduct";

const SellerDashboard = () => {
  const { user } = useContext(AuthContext);
  const [route, setRoute] = useState(false);
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
            {route === false ? "All Product" : "Add Product"}
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
                setRoute(false);
              }}
            >
              All Products
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
                setRoute(true);
              }}
            >
              Add Product
            </Button>
          </Box>
        </Box>

        <Divider sx={{ color: "black", mt: 1 }}></Divider>
      </Box>
      {route === false ? (
        <SellerProduct></SellerProduct>
      ) : (
        <SellerAddProduct></SellerAddProduct>
      )}
    </Box>
  );
};

export default SellerDashboard;
