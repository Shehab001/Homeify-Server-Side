import React from "react";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import img1 from "../../Assets/laura-davidson-1vIHVh9OaVI-unsplash.jpg";
import img2 from "../../Assets/laura-davidson-ULP07chR5EQ-unsplash.jpg";
import img3 from "../../Assets/nathalie-jolie-6-xcHVkwj0c-unsplash.jpg";
import CardContent from "@mui/material/CardContent";

const StayHome = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f6f6f4",
          //height: "100vh",
          mt: { md: -40 },
          pb: 10,
        }}
      >
        <Divider />
        <Box>
          <Box
            sx={{
              width: { xs: "80%", sm: "50%", md: "40%" },
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
              }}
            >
              Hand Made
            </Typography>
            <Typography
              sx={{
                fontFamily: "jost",
                fontSize: { xs: "35px", sm: "45px", md: "60px" },
              }}
            >
              #stayhomeessentials
            </Typography>
            <Typography sx={{ fontFamily: "jost", fontSize: "18px", mt: 1 }}>
              At Muuto, we take responsibility for our operations and reflect on
              the choices we make and how our priorities affect the wellbeing of
              people and the environment.
            </Typography>
          </Box>

          <Box m={10}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    image={img1}
                    alt="Paella dish"
                    sx={{
                      cursor: "Pointer",
                      "&:hover": {
                        transform: "scale(1.5)",
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
                      Design Solutiob
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
                        transform: "scale(1.5)",
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
                      Design Solutiob
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
                        transform: "scale(1.5)",
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
                      Design Solutiob
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StayHome;
