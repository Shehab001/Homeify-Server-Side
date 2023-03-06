import { Box } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";
import img from "../../Assets/h1_img-2.jpg";
import img1 from "../../Assets/dfv.jpg";
import { Typography } from "@mui/material";
import Buttonn from "../Small/Buttonn";
import { motion } from "framer-motion";

const NewSeason = () => {
  return (
    <>
      <Box my={10} overflow={"hidden"}>
        <Grid container spacing={2}>
          <Grid xs={12} md={6} sx={{ p: 5 }}>
            <Box sx={{ width: "80%", pl: 5 }}>
              <motion.div
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={img1}
                  alt="pic"
                  width={"100%"}
                  height={"100%"}
                  //style={{ zIndex: 0 }}
                ></img>
              </motion.div>{" "}
            </Box>
            <Box
              sx={{
                width: "75%",

                position: "relative",
                top: "-35%",
                right: "-30%",
              }}
            >
              <motion.div
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {" "}
                <img
                  src={img}
                  alt="pic"
                  width={"80%"}
                  // height={"40%"}
                  // style={{ zIndex: 0 }}
                ></img>
              </motion.div>{" "}
            </Box>
          </Grid>
          <Grid xs={12} md={6} sx={{ p: 5 }}>
            <motion.div
              initial={{ x: 250, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {" "}
              <Box
                width={"80%"}
                textAlign={"start"}
                sx={{ mx: { xs: 5, md: 0 }, mt: { xs: -40, md: 0 } }}
              >
                <Typography
                  sx={{
                    fontFamily: "quentin,Sans-serif",
                    fontSize: "20px",
                    letterSpacing: "5px",
                    color: "#814e46",
                    mt: { xs: 5, md: 20 },
                  }}
                >
                  Modern Workplace
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "jost",
                    fontSize: { xs: "40px", sm: "60px", xl: "100px" },
                    my: 1,
                    // maxWidth: "406px",
                    lineHeight: 1,
                  }}
                >
                  New Season and New Trends
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "jost",
                    fontSize: "18px",
                    opacity: 0.5,
                    my: 2,
                  }}
                >
                  At Unno, we take responsibility for our operations and reflect
                  on the choices we make and how our priorities affect the
                  wellbeing of people and the environment.
                </Typography>
                <Buttonn name="Shop Now"></Buttonn>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default NewSeason;
