import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ProductNavbar = () => {
  return (
    <>
      <Box sx={{ m: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProductNavbar;

// a slide object contains the image link, title and function/click event for when a user clicks on a card
