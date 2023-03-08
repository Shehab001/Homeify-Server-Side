import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Tilt from "react-tilt";

const SellerDashboard = () => {
  return (
    <>
      <Box>
        <Tilt options={{ max: 15, speed: 100, scale: 1 }}>
          <Grid
            container
            sx={{ boxShadow: "5", backgroundColor: "white", mb: 2 }}
          >
            <Grid item xs={2.5} md={2.5} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>Name</Typography>
            </Grid>
            <Grid item xs={2.5} md={2.5} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>Price</Typography>
            </Grid>
            <Grid item xs={2.5} md={2.5} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>Date</Typography>
            </Grid>
            <Grid item xs={2.5} md={2.5} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>
                Location
              </Typography>
            </Grid>
            <Grid item xs={2} md={2} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>Status</Typography>
            </Grid>
          </Grid>
        </Tilt>
        <Tilt options={{ max: 15, speed: 100, scale: 1 }}>
          <Grid container sx={{ boxShadow: "5", backgroundColor: "white" }}>
            <Grid item xs={2.5} md={2.5} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>N/A</Typography>
            </Grid>
            <Grid item xs={2.5} md={2.5} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>N/A</Typography>
            </Grid>
            <Grid item xs={2.5} md={2.5} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>N/A</Typography>
            </Grid>
            <Grid item xs={2.5} md={2.5} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>N/A</Typography>
            </Grid>
            <Grid item xs={2} md={2} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>N/A</Typography>
            </Grid>
          </Grid>
        </Tilt>

        <Tilt options={{ max: 15, speed: 100, scale: 1, mb: 2 }}>
          <Grid container sx={{ boxShadow: "5", backgroundColor: "white" }}>
            <Grid item xs={2.5} md={2.5} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>{}</Typography>
            </Grid>
            <Grid item xs={2.5} md={2.5} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>{}</Typography>
            </Grid>
            <Grid item xs={2.5} md={2.5} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>{}</Typography>
            </Grid>
            <Grid item xs={2.5} md={2.5} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>{}</Typography>
            </Grid>
            <Grid item xs={2} md={2} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>{}</Typography>
            </Grid>
          </Grid>
        </Tilt>
      </Box>
    </>
  );
};

export default SellerDashboard;
