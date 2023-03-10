import React, { Component, useContext } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Product.css";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { AuthContext } from "../../Context/Context";

const Category = () => {
  const { query, setQuery } = useContext(AuthContext);
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {" "}
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="mainn">
          <Typography
            sx={{
              mt: 5,
              fontFamily: "jest",
              fontSize: "30px",
              fontWeight: "bold",
              letterSpacing: "5px",
            }}
          >
            Category
          </Typography>
          <Slider {...settings}>
            <div className="">
              <Box
                py={5}
                px={1}
                onClick={() => {
                  setQuery("living");
                }}
              >
                <Card
                  sx={{
                    Width: 275,
                    backgroundColor: "#f6f6f4",
                    py: 1,
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.1)",
                      transition: "1s",
                    },
                  }}
                >
                  <CardContent sx={{ p: 0, pb: "0px!important" }}>
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontFamily: "jest",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      Living
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </div>
            <div>
              <Box
                py={5}
                px={1}
                onClick={() => {
                  setQuery("bedroom");
                }}
              >
                <Card
                  sx={{
                    Width: 275,
                    backgroundColor: "#f6f6f4",
                    py: 1,

                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.1)",
                      transition: "1s",
                    },
                    borderRadius: "none",
                  }}
                >
                  <CardContent sx={{ p: 0, pb: "0px!important" }}>
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontFamily: "jest",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      Bedroom
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </div>
            <div>
              <Box
                py={5}
                px={1}
                onClick={() => {
                  setQuery("dining");
                }}
              >
                <Card
                  sx={{
                    Width: 275,
                    backgroundColor: "#f6f6f4",
                    py: 1,

                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.1)",
                      transition: "1s",
                    },
                  }}
                >
                  <CardContent sx={{ p: 0, pb: "0px!important" }}>
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontFamily: "jest",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      Dining
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </div>
            <div>
              <Box
                py={5}
                px={1}
                onClick={() => {
                  setQuery("kids");
                }}
              >
                <Card
                  sx={{
                    Width: 275,
                    backgroundColor: "#f6f6f4",
                    py: 1,

                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.1)",
                      transition: "1s",
                    },
                  }}
                >
                  <CardContent sx={{ p: 0, pb: "0px!important" }}>
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontFamily: "jest",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      Kids Room
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </div>
            <div>
              <Box
                py={5}
                px={1}
                onClick={() => {
                  setQuery("institute");
                }}
              >
                <Card
                  sx={{
                    Width: 275,
                    backgroundColor: "#f6f6f4",
                    py: 1,

                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.1)",
                      transition: "1s",
                    },
                  }}
                >
                  <CardContent sx={{ p: 0, pb: "0px!important" }}>
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontFamily: "jest",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      Institional
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </div>
            <div>
              <Box
                py={5}
                px={1}
                onClick={() => {
                  setQuery("door");
                }}
              >
                <Card
                  sx={{
                    Width: 275,
                    backgroundColor: "#f6f6f4",
                    py: 1,

                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.1)",
                      transition: "1s",
                    },
                  }}
                >
                  <CardContent sx={{ p: 0, pb: "0px!important" }}>
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontFamily: "jest",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      Door
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </div>
            <div>
              <Box
                py={5}
                px={1}
                onClick={() => {
                  setQuery("interior");
                }}
              >
                <Card
                  sx={{
                    Width: 275,
                    backgroundColor: "#f6f6f4",
                    py: 1,

                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.1)",
                      transition: "1s",
                    },
                  }}
                >
                  <CardContent sx={{ p: 0, pb: "0px!important" }}>
                    <Typography
                      sx={{
                        fontSize: 20,
                        fontFamily: "jest",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      Interior
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </div>
          </Slider>
        </div>
      </motion.div>
    </>
  );
};

export default Category;
