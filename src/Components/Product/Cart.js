import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import Tilt from "react-tilt";
import { AuthContext } from "../../Context/Context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Small/Loader/Loader";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Buttonn from "../Small/Buttonn";

const Cart = () => {
  const { user } = useContext(AuthContext);
  const [spin, setSpin] = useState(false);
  const [fresh, setFresh] = useState(false);
  const [cart, setCart] = useState([]);
  const [id, setId] = useState([]);
  //console.log(id);

  let total = 0;

  const calc = (quantity, price) => {
    quantity = parseInt(quantity);
    price = parseInt(price);
    total += quantity * price;
  };

  useEffect(() => {
    setSpin(true);
    fetch(`https://homeify-server.vercel.app/fetchcart/${user?.uid}`)
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
        setSpin(false);
      });
  }, [user, fresh]);

  const handleDelete = () => {
    fetch(`https://homeify-server.vercel.app/deletecartproduct/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted");
          setFresh(!fresh);
        } else {
          toast.error("Error");
          setFresh(!fresh);
        }
      });
  };

  return (
    <Box>
      <ToastContainer position="top-center" autoClose={500} />
      {spin === true ? (
        <Box my={20}>
          <Loader></Loader>
        </Box>
      ) : (
        <>
          <Box>
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
              Welcome To Cart
            </Typography>
          </Box>
          <Box mx={{ sm: 5, xs: 0 }}>
            <Tilt options={{ max: 15, speed: 50, scale: 1 }}>
              <Grid container sx={{ boxShadow: "5", backgroundColor: "white" }}>
                <Grid item xs={2} md={2} sx={{}}>
                  <Typography sx={{ py: 2, fontWeight: "bold" }}>
                    Name
                  </Typography>
                </Grid>
                <Grid item xs={2} md={2} sx={{}}>
                  <Typography sx={{ py: 2, fontWeight: "bold" }}>
                    Quantity
                  </Typography>
                </Grid>
                <Grid item xs={2} md={2} sx={{}}>
                  <Typography sx={{ py: 2, fontWeight: "bold" }}>
                    Price
                  </Typography>
                </Grid>
                <Grid item xs={2} md={2} sx={{}}>
                  <Typography sx={{ py: 2, fontWeight: "bold" }}>
                    Location
                  </Typography>
                </Grid>
                <Grid item xs={2} md={2} sx={{}}>
                  <Typography sx={{ py: 2, fontWeight: "bold" }}>
                    Time
                  </Typography>
                </Grid>
                <Grid item xs={2} md={2} sx={{}}>
                  <Typography sx={{ py: 2, fontWeight: "bold" }}>
                    Action
                  </Typography>
                </Grid>
              </Grid>
            </Tilt>
          </Box>
          {cart.length > 0 && (
            <Box mb={20}>
              {cart.map(
                (data) => (
                  calc(data.quantity, data.price),
                  (
                    <Box my={1} mx={{ sm: 5, xs: 0 }}>
                      <Tilt options={{ max: 5, speed: 10, scale: 1 }}>
                        <Grid
                          container
                          sx={{
                            boxShadow: "5",
                            backgroundColor: "white",
                          }}
                        >
                          <Grid item xs={2} md={2} sx={{}}>
                            <Typography
                              sx={{
                                py: 2,
                                pl: 2,
                                fontWeight: "bold",
                                fontSize: { xs: "10px", sm: "16px" },
                              }}
                            >
                              {data.name}
                            </Typography>
                          </Grid>
                          <Grid item xs={2} md={2} sx={{}}>
                            <Typography
                              sx={{
                                py: 2,
                                fontWeight: "bold",
                                fontSize: { xs: "10px", sm: "16px" },
                              }}
                            >
                              {data.quantity}
                            </Typography>
                          </Grid>
                          <Grid item xs={2} md={2} sx={{}}>
                            <Typography
                              sx={{
                                py: 2,
                                fontWeight: "bold",
                                fontSize: { xs: "10px", sm: "16px" },
                              }}
                            >
                              {data.price}
                            </Typography>
                          </Grid>
                          <Grid item xs={2} md={2} sx={{}}>
                            <Typography
                              sx={{
                                py: 2,
                                fontWeight: "bold",
                                fontSize: { xs: "10px", sm: "16px" },
                                overflow: "hidden",
                              }}
                            >
                              {data.location}
                            </Typography>
                          </Grid>
                          <Grid item xs={2} md={2} sx={{}}>
                            <Typography
                              sx={{
                                py: 2,
                                fontWeight: "bold",
                                fontSize: { xs: "10px", sm: "16px" },
                              }}
                            >
                              {data.time}
                            </Typography>
                          </Grid>
                          <Grid item xs={2} md={2} sx={{}}>
                            <Typography sx={{ py: 2, fontWeight: "bold" }}>
                              <RemoveCircleOutlineIcon
                                sx={{
                                  fontSize: {
                                    xs: "20px",
                                    sm: "36px",
                                    color: "#b90000e0",
                                    cursor: "pointer",
                                    "&:hover": {
                                      transform: "scale(1.3)",
                                    },
                                  },
                                }}
                                onMouseOver={() => setId(data._id)}
                                onClick={handleDelete}
                              ></RemoveCircleOutlineIcon>
                            </Typography>
                          </Grid>
                        </Grid>
                      </Tilt>
                    </Box>
                  )
                )
              )}
              <Divider sx={{ mt: 10, mx: 10 }}></Divider>
              <Box
                sx={{
                  mx: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {" "}
                <Typography
                  sx={{
                    fontFamily: "jest",
                    fontWeight: "bold",
                    fontSize: "20px",
                    letterSpacing: "3px",
                  }}
                >
                  Total :{total}
                </Typography>{" "}
                <Button
                  sx={{
                    backgroundColor: "#222222",
                    color: "white",
                    borderRadius: 0,
                    float: "left",
                    py: { xs: "2px", md: "12px" },
                    px: { xs: "20px", md: "40px" },

                    "&:hover": {
                      background: "#6e3e37",
                    },
                  }}
                >
                  Purchase Now
                </Button>
              </Box>
              <Divider sx={{ mx: 10 }}></Divider>
            </Box>
          )}
          {cart.length < 1 && (
            <>
              {" "}
              <Box mb={20} mt={1} mx={{ sm: 5, xs: 0 }}>
                <Tilt options={{ max: 15, speed: 100, scale: 1 }}>
                  <Grid
                    container
                    sx={{ boxShadow: "5", backgroundColor: "white" }}
                  >
                    <Grid item xs={2} md={2} sx={{}}>
                      <Typography sx={{ py: 2, fontWeight: "bold" }}>
                        N/A
                      </Typography>
                    </Grid>
                    <Grid item xs={2} md={2} sx={{}}>
                      <Typography sx={{ py: 2, fontWeight: "bold" }}>
                        N/A
                      </Typography>
                    </Grid>
                    <Grid item xs={2} md={2} sx={{}}>
                      <Typography sx={{ py: 2, fontWeight: "bold" }}>
                        N/A
                      </Typography>
                    </Grid>
                    <Grid item xs={2} md={2} sx={{}}>
                      <Typography sx={{ py: 2, fontWeight: "bold" }}>
                        N/A
                      </Typography>
                    </Grid>
                    <Grid item xs={2} md={2} sx={{}}>
                      <Typography sx={{ py: 2, fontWeight: "bold" }}>
                        N/A
                      </Typography>
                    </Grid>
                    <Grid item xs={2} md={2} sx={{}}>
                      <Typography sx={{ py: 2, fontWeight: "bold" }}>
                        N/A
                      </Typography>
                    </Grid>
                  </Grid>
                </Tilt>
              </Box>
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default Cart;
