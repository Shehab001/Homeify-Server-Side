import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/system";
import Bar from "../Small/ProgressBar";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import Typography from "@mui/material/Typography";
import Buttonn from "../Small/Buttonn";
import img1 from "../../Assets/pngegg (7).png";
import img2 from "../../Assets/pnegg (7).png";
import img3 from "../../Assets/imgg3.png";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import "./Carousal.css";
import { motion } from "framer-motion";

function Carousal() {
  var items = [1, 2];
  // <Item key={i} item={item} />;

  return (
    <Carousel
      sx={{
        animation: "slide",
        duration: 5000,
        interval: 8000,
        backgroundColor: "#f6f6f4",
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  //console.log(props.item);
  return (
    <>
      {props.item === 1 ? (
        <>
          <Bar></Bar>
          <Box
            sx={{
              position: "relative",
              maxWidth: "1400px",
              mx: "auto",
              overflow: "hidden",
              height: { xs: "60vh", sm: "80vh", md: "90vh" },
            }}
          >
            <motion.div
              initial={{ x: -250 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5, duration: 2.5 }}
            >
              {" "}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "150px", md: "150px" },
                  left: 0,
                  zIndex: 1050,
                }}
              >
                <LooksOneIcon
                  sx={{
                    fontSize: { xs: "80px", sm: "150px", md: "230px" },
                    opacity: 0.2,
                  }}
                ></LooksOneIcon>
              </Box>
            </motion.div>
            <motion.div
              initial={{ y: 250, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 2.5 }}
            >
              {" "}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "120px", sm: "130px", md: "150px" },
                  left: { xs: "90px", sm: "180px", md: "300px" },
                  zIndex: 1050,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "jest",
                    fontSize: { xs: "14px", sm: "16px", md: "20px" },
                    letterSpacing: "2px",
                    fontWeight: "bold",
                    textAlign: "start",
                  }}
                >
                  By Shehab Chowdhury
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "jest",
                    fontSize: { xs: "35px", sm: "50px", md: "60px" },
                    fontWeight: "bold",
                    textAlign: "start",
                    lineHeight: { xs: "35px", sm: "50px", md: "60px" },
                    my: { xs: 1, sm: 1.5, md: 2.5 },
                  }}
                >
                  Chaise <br></br>Lounge Couch
                </Typography>
                <Buttonn name="Shop Now"></Buttonn>
              </Box>
            </motion.div>{" "}
            <Box
              sx={{
                position: "absolute",
                right: { xs: "10px", sm: "20px", md: "20px", lg: "30px" },
                bottom: { xs: "-50px", md: "-100px" },
                height: {
                  xs: "250px",
                  sm: "300px",
                  md: "400px",
                  lg: "600px",
                },
                width: { xs: "250px", sm: "300px", md: "400px", lg: "600px" },
                borderRadius: "100%",
                backgroundColor: "#eae6e3",
                zIndex: 1000,
              }}
            >
              <motion.div
                initial={{ y: 500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 2.5 }}
              >
                <img className="center" src={img1} alt="Furniture"></img>
              </motion.div>
            </Box>
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 2.5 }}
            >
              <Box
                sx={{
                  zIndex: 1050,
                }}
              >
                <img
                  className="center1"
                  style={{ position: "absolute", right: 0, zIndex: 1050 }}
                  src={img2}
                  alt="Furniture"
                ></img>
              </Box>
            </motion.div>
          </Box>
        </>
      ) : (
        <>
          <Bar></Bar>
          <Box
            sx={{
              position: "relative",
              maxWidth: "1400px",
              mx: "auto",
              overflow: "hidden",
              height: { xs: "60vh", sm: "80vh", md: "90vh" },
            }}
          >
            <motion.div
              initial={{ x: -250 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {" "}
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: "150px", md: "150px" },
                  left: 0,
                  zIndex: 1050,
                }}
              >
                <LooksTwoIcon
                  sx={{
                    fontSize: { xs: "80px", sm: "150px", md: "230px" },
                    opacity: 0.2,
                  }}
                ></LooksTwoIcon>
              </Box>
            </motion.div>

            <Box
              sx={{
                position: "absolute",
                top: { xs: "120px", sm: "130px", md: "150px" },
                left: { xs: "90px", sm: "180px", md: "300px" },
                zIndex: 1050,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "jest",
                  fontSize: { xs: "14px", sm: "16px", md: "20px" },
                  letterSpacing: "2px",
                  fontWeight: "bold",
                  textAlign: "start",
                }}
              >
                By Shehab Chowdhury
              </Typography>
              <Typography
                sx={{
                  fontFamily: "jest",
                  fontSize: { xs: "35px", sm: "50px", md: "60px" },
                  fontWeight: "bold",
                  textAlign: "start",
                  lineHeight: { xs: "35px", sm: "50px", md: "60px" },
                  my: { xs: 1, sm: 1.5, md: 2.5 },
                }}
              >
                Couch <br></br>Chair Sofa
              </Typography>
              <Buttonn name="Shop Now"></Buttonn>
            </Box>

            <Box
              sx={{
                position: "absolute",
                right: { xs: "10px", sm: "20px", md: "20px", lg: "30px" },
                bottom: { xs: "-50px", md: "-100px" },
                height: { xs: "250px", sm: "300px", md: "400px", lg: "600px" },
                width: { xs: "250px", sm: "300px", md: "400px", lg: "600px" },
                borderRadius: "100%",
                backgroundColor: "#eae6e3",
                zIndex: 1000,
              }}
            >
              <img className="center3" src={img3} alt="Furniture"></img>
            </Box>
            <Box
              sx={{
                zIndex: 1050,
              }}
            >
              <img
                className="center1"
                style={{ position: "absolute", right: 0, zIndex: 1050 }}
                src={img2}
                alt="Furniture"
              ></img>
            </Box>
          </Box>
        </>
      )}
    </>
  );
}

export default Carousal;
