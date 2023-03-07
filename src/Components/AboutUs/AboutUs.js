import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Buttonn from "../Small/Buttonn";
import { motion } from "framer-motion";
import img1 from "../../Assets/contact_1-1536x1006.jpg";
import img2 from "../../Assets/contact_2-1536x1006.jpg";

const AboutUs = () => {
  return (
    <>
      <Box id="aboutus" mb={10} overflow={"hidden"}>
        <Box
          sx={{
            width: { xs: "80%", sm: "70%", md: "60%" },
            textAlign: "center",
            mx: "auto",
            pt: 10,
          }}
        >
          <Typography
            sx={{
              fontFamily: "jost",
              fontSize: "25px",
              letterSpacing: "5px",
              color: "#814e46",
              mb: 1,
            }}
          >
            Coming Home
          </Typography>
          <Typography
            sx={{
              fontFamily: "jost",
              fontSize: { xs: "25px", sm: "45px", md: "30px" },
            }}
          >
            Designed with the modern family in mind, designer Hee Welling
            considered every aspect of the Patch table to ensure maximum
            functionality.
          </Typography>
        </Box>
        <Box mt={10} px={10}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
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
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ x: 250, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {" "}
                <Box
                  textAlign={"start"}
                  sx={{
                    ml: { xs: 0, md: 5 },
                    width: { xs: "100%", md: "80%" },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "jost",
                      fontSize: { xs: "25px", sm: "40px", xl: "60px" },
                      my: 1,
                      width: { xs: "350px", sm: "506px" },
                      lineHeight: 1,
                      fontWeight: "bold",
                    }}
                  >
                    We’re different by design
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "jost",
                      fontSize: "18px",
                      opacity: 0.5,
                      my: 2,
                    }}
                  >
                    Our story started with a problem (the best ideas usually
                    do). Some ten years ago, our founder was furnishing his
                    flat. Frustrated at the lack of well-designed, good quality
                    and affordable sofas, he set about redefining the process.
                    The concept was clear: collaborate with independent
                    designers and makers to create pieces you’ll love, minus the
                    mark-up. And so MADE.COM was born. The destination for
                    creating your dream home.
                  </Typography>
                  <Buttonn name="Shop Now"></Buttonn>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6} sx={{ mt: { xs: 0, md: 10 } }}>
              <motion.div
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={img2}
                  alt="pic"
                  width={"100%"}
                  height={"100%"}
                  //style={{ zIndex: 0 }}
                ></img>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6} sx={{ mt: { xs: 0, md: 10 } }}>
              <motion.div
                initial={{ x: 250, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                {" "}
                <Box
                  textAlign={"start"}
                  sx={{
                    ml: { xs: 0, md: 5 },
                    width: { xs: "100%", md: "80%" },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "jost",
                      fontSize: { xs: "25px", sm: "40px", xl: "60px" },
                      my: 1,
                      width: { xs: "350px", sm: "506px" },
                      lineHeight: 1,
                      fontWeight: "bold",
                    }}
                  >
                    We support independent designers
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "jost",
                      fontSize: "18px",
                      opacity: 0.5,
                      my: 2,
                    }}
                  >
                    Nothing excites us more than great design. That’s why we
                    champion emerging and established creative talent from all
                    over the world. The result? Innovative products and
                    exclusive ranges. Pieces that consider every space and
                    individual. And for our designers, it means being part of a
                    true partnership that has their interests at heart.
                  </Typography>
                  <Buttonn name="Shop Now"></Buttonn>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </>
  );
};

export default AboutUs;
