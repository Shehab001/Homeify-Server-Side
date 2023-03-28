import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import Tilt from "react-tilt";
import { AuthContext } from "../../../Context/Context";

const UserDashboard = (props) => {
  const { user } = useContext(AuthContext);
  const [spin, setSpin] = useState(false);
  const [cart, setCart] = useState([]);
  console.log(cart);

  useEffect(() => {
    setSpin(true);
    fetch(`http://localhost:5000/payment/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
        setSpin(false);
      });
  }, [user]);
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
        <Tilt options={{ max: 5, speed: 10, scale: 1 }}>
          <Grid
            container
            sx={{ boxShadow: "5", backgroundColor: "white", mb: 2 }}
          >
            <Grid item xs={2.5} md={2.5} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>Name</Typography>
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
              <Typography sx={{ py: 2, fontWeight: "bold" }}>Price</Typography>
            </Grid>
            <Grid item xs={2} md={2} sx={{}}>
              <Typography sx={{ py: 2, fontWeight: "bold" }}>Status</Typography>
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
                    <Typography
                      sx={{
                        py: 2,
                        fontWeight: "bold",
                        fontSize: { xs: "10px", sm: "16px" },
                      }}
                    >
                      {data.status}
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
    </>
  );
};

export default UserDashboard;
