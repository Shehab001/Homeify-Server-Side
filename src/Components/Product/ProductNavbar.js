import { Grid, Rating } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Rangee from "../Small/Rangee";
import SearchBar from "../Small/SearchBar";
import Product from "./Product";
import { motion } from "framer-motion";

const ProductNavbar = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Box sx={{ mb: 10, mx: 10 }}>
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item sm={4} xs={12} pt={5}>
              <Rangee></Rangee>
            </Grid>
            <Grid item sm={4} xs={12}>
              <SearchBar></SearchBar>
            </Grid>
            <Grid item sm={4} xs={12}>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </motion.div>

      <Product></Product>
    </>
  );
};

export default ProductNavbar;

// a slide object contains the image link, title and function/click event for when a user clicks on a card
