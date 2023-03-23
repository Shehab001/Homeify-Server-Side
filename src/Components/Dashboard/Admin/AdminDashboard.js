import { Box, Button, Divider, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/Context";
import Loader from "../../Small/Loader/Loader";
import AdminAllSeller from "./AdminAllSeller";
import AdminAllUser from "./AdminAllUser";
import ReportedItems from "./ReportedItems";

const AdminDashboard = () => {
  const { user, freshh } = useContext(AuthContext);
  const [route, setRoute] = useState(0);
  const [spin, setSpin] = useState(false);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    setSpin(true);
    fetch(`http://localhost:5000/fetchuser`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setSpin(false);
      });
  }, [freshh]);

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
              color: "Black",

              textAlign: "start",
            }}
          >
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

        <Divider sx={{ color: "black", mt: 1, mb: 2 }}></Divider>
      </Box>
      {spin === true ? (
        <Box my={20}>
          <Loader></Loader>
        </Box>
      ) : (
        <Box>
          {route === 1 ? (
            <AdminAllSeller></AdminAllSeller>
          ) : route === 2 ? (
            <ReportedItems></ReportedItems>
          ) : (
            <AdminAllUser></AdminAllUser>
          )}
        </Box>
      )}
    </Box>
  );
};

export default AdminDashboard;
