import {
  Box,
  Button,
  Divider,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useLoaderData } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

const SingleService = () => {
  const data = useLoaderData();
  console.log(data);
  const description = data.description.split(".");
  //console.log(description);

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

  const handleForm = () => {};
  return (
    <Box sx={{ m: 10 }}>
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>

      <Box>
        <Grid container spacing={5} my={2}>
          <Grid item xs={12} sm={6}>
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Tilt className="Tilt" options={{ max: 5, scale: 1, speed: 100 }}>
                <Box sx={{ border: 5, borderColor: "#f6f6f4" }}>
                  {" "}
                  <ImageGallery items={images} />
                </Box>
              </Tilt>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} p={5} textAlign={"start"}>
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography
                sx={{ fontWeight: "bold", py: 1, fontFamily: "jest" }}
              >
                Description
              </Typography>
              {description.map((des) => (
                <Typography sx={{ fontFamily: "jest" }}>• {des}</Typography>
              ))}
              <Typography
                sx={{ fontFamily: "jest", letterSpacing: "2px", mt: 5 }}
              >
                Price : ৳ {data.price}
              </Typography>
              <Typography sx={{ fontFamily: "jest", letterSpacing: "2px" }}>
                Quality : {data.quality}
              </Typography>
              <Typography sx={{ fontFamily: "jest", letterSpacing: "2px" }}>
                Sold : {data.sold} Times
              </Typography>
              <Typography sx={{ fontFamily: "jest", letterSpacing: "2px" }}>
                Admin Approved :{" "}
                <span style={{ textTransform: "uppercase" }}>
                  {data.recommended}
                </span>
              </Typography>
              <form onSubmit={handleForm}>
                <Box sx={{ backgroundColor: "#E6E6E4", p: 5, mt: 4 }}>
                  <TextField
                    id="outlined-basic"
                    label="Quantity"
                    type="number"
                    variant="outlined"
                    sx={{ mt: 2 }}
                    required
                  />
                  <TextField
                    id="outlined-basic"
                    label="Exact Location"
                    type="text"
                    variant="outlined"
                    sx={{ mt: { xs: 2 }, ml: { lg: 2 } }}
                    required
                  />
                  <br></br>
                  <Button
                    variant="outlined"
                    size="large"
                    type="submit"
                    sx={{ mt: 2 }}
                  >
                    Add To Cart
                  </Button>
                </Box>
              </form>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default SingleService;
