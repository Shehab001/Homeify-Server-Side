import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useLoaderData } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Tilt from "react-tilt";

const SingleService = () => {
  const data = useLoaderData();
  console.log(data.name);

  const images = [
    {
      original: data.img1,
      thumbnail: data.img1,
    },
    {
      original: data.img2,
      thumbnail: data.img2,
    },
    {
      original: data.img3,
      thumbnail: data.img3,
    },
  ];

  return (
    <Box sx={{ m: 10, border: 1 }}>
      <Box>
        <Typography
          sx={{
            fontFamily: "jest",
            textAlign: "start",
            letterSpacing: "2px",
          }}
        >
          {data.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "jest",
            textAlign: "start",
            letterSpacing: "2px",
            fontSize: "14px",
            opacity: 0.5,
            mb: 1,
          }}
        >
          {data.pid}
        </Typography>
        <Divider></Divider>
      </Box>
      <Box>
        <Grid container spacing={2} my={2}>
          <Grid item xs={12} sm={6}>
            <Tilt className="Tilt" options={{ max: 5, scale: 1, speed: 100 }}>
              <Box sx={{ border: 5, borderColor: "#f6f6f4" }}>
                {" "}
                <ImageGallery items={images} />
              </Box>
            </Tilt>
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default SingleService;
