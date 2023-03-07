import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Product.css";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default class Category extends Component {
  render() {
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
            <Box py={5} px={1}>
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
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: 25,
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
            <Box py={5} px={1}>
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
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: 25,
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
            <Box py={5} px={1}>
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
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: 25,
                      fontFamily: "jest",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Kitchen
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </div>
          <div>
            <Box py={5} px={1}>
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
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: 25,
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
            <Box py={5} px={1}>
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
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: 25,
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
            <Box py={5} px={1}>
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
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: 25,
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
            <Box py={5} px={1}>
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
                <CardContent>
                  <Typography
                    sx={{
                      fontSize: 25,
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
    );
  }
}
