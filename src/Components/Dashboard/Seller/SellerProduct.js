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
import Loader from "../../Small/Loader/Loader";
import SellerAddProduct from "./SellerAddProduct";

const SellerProduct = () => {
  const { user } = useContext(AuthContext);
  const [spin, setSpin] = useState(false);
  const [product, setProduct] = useState([]);
  const [fresh, setFresh] = useState(true);

  const [id, setId] = useState(null);
  console.log(id);

  //console.log(product);

  useEffect(() => {
    setSpin(true);
    fetch(`http://localhost:5000/sellerproduct/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setSpin(false);
      });
  }, [user, fresh]);

  const handleUpdate = () => {
    setSpin(true);
    fetch(`http://localhost:5000/sadvertise/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSpin(false);
        setFresh(!fresh);
        console.log(data);
      });
  };

  return (
    <>
      <Box mb={10} px={10}>
        {spin === true ? (
          <Box my={10}>
            <Loader></Loader>
          </Box>
        ) : (
          <>
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
                        {data.advertised === "Yes" ? (
                          <>
                            {" "}
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
                              disabled
                            >
                              Advertised
                            </Button>
                          </>
                        ) : (
                          <>
                            {" "}
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
                              onMouseOver={() => setId(data._id)}
                              onClick={handleUpdate}
                            >
                              Advertise
                            </Button>
                          </>
                        )}
                      </Typography>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Box>
    </>
  );
};

export default SellerProduct;
