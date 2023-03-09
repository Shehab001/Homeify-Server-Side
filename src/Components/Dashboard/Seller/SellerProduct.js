import {
  Button,
  Card,
  CardActions,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import Tilt from "react-tilt";
import { AuthContext } from "../../../Context/Context";
import DashboardButton from "../../Small/DashboardButton";
import { motion } from "framer-motion";

const SellerProduct = () => {
  const { user } = useContext(AuthContext);
  const [spin, setSpin] = useState(false);
  const [product, setProduct] = useState([]);
  const [route, setRoute] = useState(false);
  console.log(product);

  useEffect(() => {
    setSpin(true);
    fetch(`http://localhost:5000/sellerproduct/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setSpin(false);
      });
  }, [user]);

  return (
    <>
      <Box mb={10} px={10}>
        <Typography
          sx={{
            fontFamily: "jest",
            letterSpacing: "1px",
            fontSize: { md: "35px", xs: "20px" },
            fontWeight: "bold",
            color: "Black4",
            textDecoration: "underline",
            fontStyle: "italic",
            my: 5,
          }}
        >
          Welcome {user.displayName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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
            All Product
          </Typography>
          <Box display={"flex"}>
            <Button
              variant="contained"
              size="small"
              sx={{
                fontFamily: "jest",
                letterSpacing: "1px",
                backgroundColor: "#222222",
                "&:hover": {
                  background: "#6e3e37",
                },
                fontSize: "10px",
                mr: 1,
              }}
              onClick={() => {
                setRoute(false);
              }}
            >
              All Products
            </Button>
            <Button
              variant="contained"
              size="small"
              sx={{
                fontFamily: "jest",
                letterSpacing: "1px",
                backgroundColor: "#222222",
                "&:hover": {
                  background: "#6e3e37",
                },
                fontSize: "10px",
              }}
              onClick={() => {
                setRoute(true);
              }}
            >
              Add Product
            </Button>
          </Box>
        </Box>

        <Divider sx={{ color: "black", mt: 1 }}></Divider>
        <Grid container pt={2}>
          {" "}
          {product.map((data) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{ backgroundColor: "#f6f6f4", p: 1 }}
            >
              {" "}
              <motion.div
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <Card
                  sx={{
                    backgroundColor: "#e6e6e4",
                    p: 1,
                    "&:hover": {
                      transform: "scale(1.1)",
                      transition: "1s",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image={data.img1}
                  />
                  <Typography
                    sx={{
                      fontFamily: "jest",
                      letterSpacing: "3px",
                      textAlign: "start",
                      pl: 2,
                    }}
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "jest",
                      letterSpacing: "3px",
                      textAlign: "start",
                      pl: 2,
                    }}
                  >
                    {data.pid}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "jest",
                      letterSpacing: "3px",
                      textAlign: "start",
                      pl: 2,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    Left : {data.quantity}
                    <Button
                      sx={{
                        fontFamily: "jest",
                        letterSpacing: "1px",
                        backgroundColor: "#222222",
                        "&:hover": {
                          background: "#6e3e37",
                        },
                        fontSize: "10px",
                      }}
                      variant="contained"
                      size="small"
                    >
                      Advertise
                    </Button>
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default SellerProduct;
