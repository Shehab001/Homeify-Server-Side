import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { motion } from "framer-motion";
import img1 from "../../Assets/Rectangle-618.jpg";
import img2 from "../../Assets/Rectangle-618-1.jpg";
import img3 from "../../Assets/Rectangle-618-2.jpg";

const OurTeam = () => {
  return (
    <>
      <Divider></Divider>
      <Box>
        <Box>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {" "}
            <Box
              sx={{
                width: { xs: "80%", sm: "80%", md: "70%" },
                textAlign: "center",
                mx: "auto",
                pt: 10,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "jost",
                  fontSize: "35px",
                  letterSpacing: "5px",
                  fontWeight: "bold",
                }}
              >
                Our Team
              </Typography>
              <Typography
                sx={{
                  fontFamily: "jost",
                  fontSize: { xs: "20px", sm: "20px", md: "20px" },
                  mb: 5,
                }}
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </Typography>
            </Box>
          </motion.div>
        </Box>
        <Box pb={10}>
          <Grid container spacing={2} px={10}>
            <Grid item xs={12} sm={12} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  image={img1}
                  alt="Paella dish"
                  sx={{
                    cursor: "Pointer",
                    "&:hover": {
                      transform: "scale(1.1)",
                      transition: "1s linear",
                    },
                  }}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "20px", letterSpacing: "5px" }}
                  >
                    Jon Stones
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ letterSpacing: "5px" }}
                  >
                    Designer
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  image={img2}
                  alt="Paella dish"
                  sx={{
                    cursor: "Pointer",
                    "&:hover": {
                      transform: "scale(1.1)",
                      transition: "1s linear",
                    },
                  }}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "20px", letterSpacing: "5px" }}
                  >
                    Smith Rowe
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ letterSpacing: "5px" }}
                  >
                    Designer
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  image={img3}
                  alt="Paella dish"
                  sx={{
                    cursor: "Pointer",
                    "&:hover": {
                      transform: "scale(1.1)",
                      transition: "1s linear",
                    },
                  }}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "20px", letterSpacing: "5px" }}
                  >
                    Irina Mikailova
                  </Typography>
                  <Typography
                    color="text.secondary"
                    sx={{ letterSpacing: "5px" }}
                  >
                    Designer
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default OurTeam;
