import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/Context";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Box>
        <Grid container height={"100vh"}>
          <Grid item xs={4} sm={2} sx={{ backgroundColor: "black" }}>
            hi
          </Grid>
          <Grid item xs={8} sm={10} sx={{ backgroundColor: "cyan" }}>
            hi
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Dashboard;
