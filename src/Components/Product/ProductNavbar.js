import { Divider, Grid, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import Rangee from "../Small/Rangee";
import SearchBar from "../Small/SearchBar";
import Product from "./Product";
import { motion } from "framer-motion";
import { AuthContext } from "../../Context/Context";
import CancelIcon from "@mui/icons-material/Cancel";

const ProductNavbar = () => {
  const { rating, setRating, setQuery, setList, setPrice, setSearch } =
    useContext(AuthContext);
  return (
    <>
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Box sx={{ mb: 2, mx: { md: 10, xs: 2 }, mt: 2 }}>
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
            Search Parameters
          </Typography>
          <Divider sx={{ mb: 0 }}></Divider>
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item sm={4} xs={4} pt={5} ml={{ xs: "-25px", sm: 0 }}>
              <Rangee></Rangee>
            </Grid>
            <Grid item sm={4} xs={4}>
              <SearchBar></SearchBar>
            </Grid>
            <Grid
              item
              sm={4}
              xs={4}
              display={"flex"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <Rating
                name="simple-controlled"
                value={rating}
                sx={{ fontSize: { md: 30, xs: 20, sm: 20 } }}
                onChange={(event, newValue) => {
                  setRating(newValue);
                }}
              />
              <Typography>
                <CancelIcon
                  sx={{
                    fontSize: { md: 35, xs: 25, sm: 25 },
                    mt: { xs: 1, sm: 0 },
                    mr: { xs: -5, sm: 0 },
                    cursor: "pointer",
                    "&:hover": { transform: "scale(1.3)" },
                  }}
                  onClick={() => {
                    setQuery("");
                    setList("");
                    setRating(null);
                    setPrice([0]);
                    setSearch("Product Name");
                  }}
                ></CancelIcon>
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ mb: { xs: 5, sm: 8 } }}></Divider>
        </Box>
      </motion.div>

      <Product></Product>
    </>
  );
};

export default ProductNavbar;

// a slide object contains the image link, title and function/click event for when a user clicks on a card
