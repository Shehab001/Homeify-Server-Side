import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Tilt from "react-tilt";

const AdminAllUser = () => {
  return (
    <Box mb={10}>
      <Box mx={{ sm: 10, xs: 5 }}>
        <Tilt options={{ max: 15, speed: 50, scale: 1 }}>
          <Grid container sx={{ boxShadow: "5", backgroundColor: "white" }}>
            <Grid item xs={2.4} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>Name</Typography>
            </Grid>
            <Grid item xs={2.4} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>Email</Typography>
            </Grid>
            <Grid item xs={2.4} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>Price</Typography>
            </Grid>
            <Grid item xs={2.4} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>
                Contact
              </Typography>
            </Grid>
            <Grid item xs={2.4} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>Action</Typography>
            </Grid>
          </Grid>
        </Tilt>
      </Box>
    </Box>
  );
};

export default AdminAllUser;
