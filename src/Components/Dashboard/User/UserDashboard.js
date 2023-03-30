import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import Tilt from "react-tilt";
import { AuthContext } from "../../../Context/Context";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../Small/Loader/Loader";

const UserDashboard = (props) => {
  const { user } = useContext(AuthContext);
  const [spin, setSpin] = useState(false);
  const [cart, setCart] = useState([]);
  const [fresh, setFresh] = useState(false);
  const [id, setId] = useState([]);
  console.log(id);

  useEffect(() => {
    setSpin(true);
    fetch(`http://localhost:5000/payment/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
        setSpin(false);
      });
  }, [user, fresh]);
  const handleDelete = () => {
    fetch(`http://localhost:5000/deletedashboardproduct/${id}`)
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
  // console.log(cart);
  //temporaray showing dATA FORM cart ,daata will be shown from payment database
  return (
    <>
      {/* user */}
      <Box pb={20} sx={{ px: 2 }}>
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
          All Purchased Product
        </Typography>
        {spin === true ? (
          <Box my={20}>
            <Loader></Loader>
          </Box>
        ) : (
          <Box>
            <Tilt options={{ max: 5, speed: 10, scale: 1 }}>
              <Grid
                container
                sx={{
                  boxShadow: "5",
                  backgroundColor: "white",
                  mb: 2,
                }}
              >
                <Grid item xs={2.5} md={2.5} sx={{}}>
                  <Typography sx={{ py: 2, fontWeight: "bold" }}>
                    Name
                  </Typography>
                </Grid>
                <Grid item xs={2.5} md={2.5} sx={{}}>
                  <Typography sx={{ py: 2, fontWeight: "bold" }}>
                    Payment Id
                  </Typography>
                </Grid>
                <Grid item xs={2.5} md={2.5} sx={{}}>
                  <Typography sx={{ py: 2, fontWeight: "bold" }}>
                    Location
                  </Typography>
                </Grid>
                <Grid item xs={2.5} md={2.5} sx={{}}>
                  <Typography sx={{ py: 2, fontWeight: "bold" }}>
                    Price
                  </Typography>
                </Grid>
                <Grid item xs={2} md={2} sx={{}}>
                  <Typography sx={{ py: 2, fontWeight: "bold" }}>
                    Status
                  </Typography>
                </Grid>
              </Grid>
            </Tilt>
            {cart.length > 0 ? (
              <>
                {cart.map((data) => (
                  <Tilt options={{ max: 5, speed: 10, scale: 1 }}>
                    <Grid
                      container
                      sx={{
                        boxShadow: "5",
                        backgroundColor: "white",
                        mb: 2,
                        alignItems: "center",
                      }}
                    >
                      <Grid item xs={2.5} md={2.5} sx={{}}>
                        <Typography
                          sx={{
                            py: 2,
                            fontWeight: "bold",
                            fontSize: { xs: "10px", sm: "16px" },
                          }}
                        >
                          {data.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={2.5} md={2.5} sx={{}}>
                        <Typography
                          sx={{
                            py: 2,
                            fontWeight: "bold",
                            fontSize: { xs: "10px", sm: "16px" },

                            overflowX: { xs: "scroll", lg: "hidden" },
                          }}
                        >
                          {data.paymentId}
                        </Typography>
                      </Grid>
                      <Grid item xs={2.5} md={2.5} sx={{}}>
                        <Typography
                          sx={{
                            py: 2,
                            fontWeight: "bold",
                            fontSize: { xs: "10px", sm: "16px" },
                          }}
                        >
                          {data.location}
                        </Typography>
                      </Grid>
                      <Grid item xs={2.5} md={2.5} sx={{}}>
                        <Typography
                          sx={{
                            py: 2,
                            fontWeight: "bold",
                            fontSize: { xs: "10px", sm: "16px" },
                          }}
                        >
                          {data.total}
                        </Typography>
                      </Grid>
                      <Grid item xs={2} md={2} sx={{}}>
                        <Typography sx={{ pt: 1, fontWeight: "bold" }}>
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
                ))}
              </>
            ) : (
              <>
                <Tilt options={{ max: 15, speed: 100, scale: 1 }}>
                  <Grid
                    container
                    sx={{
                      boxShadow: "5",
                      backgroundColor: "white",
                    }}
                  >
                    <Grid item xs={2.5} md={2.5} sx={{}}>
                      <Typography sx={{ py: 2, fontWeight: "bold" }}>
                        N/A
                      </Typography>
                    </Grid>
                    <Grid item xs={2.5} md={2.5} sx={{}}>
                      <Typography sx={{ py: 2, fontWeight: "bold" }}>
                        N/A
                      </Typography>
                    </Grid>
                    <Grid item xs={2.5} md={2.5} sx={{}}>
                      <Typography sx={{ py: 2, fontWeight: "bold" }}>
                        N/A
                      </Typography>
                    </Grid>
                    <Grid item xs={2.5} md={2.5} sx={{}}>
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
              </>
            )}
          </Box>
        )}
      </Box>
    </>
  );
};

export default UserDashboard;
