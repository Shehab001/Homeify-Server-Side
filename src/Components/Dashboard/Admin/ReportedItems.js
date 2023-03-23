import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../Small/Loader/Loader";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const ReportedItems = () => {
  const [id, setId] = useState([]);
  const [fresh, setFresh] = useState([]);
  const [data, setData] = useState([]);
  const [spin, setSpin] = useState(false);
  console.log(id);
  useEffect(() => {
    setSpin(true);
    fetch(`http://localhost:5000/report`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setSpin(false);
      });
  }, [fresh]);

  const handleDelete = () => {
    setSpin(true);
    fetch(`http://localhost:5000/deletereport/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setSpin(false);
          toast.success("Deleted");
          setFresh(!fresh);
        } else {
          setSpin(false);
          toast.error("Error");
        }
      });
  };

  return (
    <>
      <Box mb={10}>
        {spin === true ? (
          <Box my={20}>
            <Loader></Loader>
          </Box>
        ) : (
          <>
            {" "}
            <Box mx={{ sm: 10, xs: 5 }}>
              <Tilt options={{ max: 15, speed: 50, scale: 1 }}>
                <Grid
                  container
                  sx={{ boxShadow: "5", backgroundColor: "white", mb: 1 }}
                >
                  <Grid item xs={3} sx={{}}>
                    <Typography sx={{ py: 2, fontWeight: "bold" }}>
                      Product ID
                    </Typography>
                  </Grid>
                  <Grid item xs={3} sx={{}}>
                    <Typography sx={{ py: 2, fontWeight: "bold" }}>
                      Comment
                    </Typography>
                  </Grid>

                  <Grid item xs={3} sx={{}}>
                    <Typography sx={{ py: 2, fontWeight: "bold" }}>
                      Email
                    </Typography>
                  </Grid>
                  <Grid item xs={3} sx={{}}>
                    <Typography sx={{ py: 2, fontWeight: "bold" }}>
                      Action
                    </Typography>
                  </Grid>
                </Grid>
              </Tilt>
            </Box>
            <Box mx={{ sm: 10, xs: 5 }}>
              {data.map((data) => (
                <>
                  <Tilt options={{ max: 5, speed: 50, scale: 1 }}>
                    <Grid
                      container
                      sx={{
                        boxShadow: "5",
                        backgroundColor: "white",
                        mb: 1,
                      }}
                    >
                      <Grid item xs={3} sx={{}}>
                        <Typography sx={{ py: 2, fontWeight: "bold" }}>
                          {data.pid}
                        </Typography>
                      </Grid>
                      <Grid item xs={3} sx={{}}>
                        <Typography sx={{ py: 2, fontWeight: "bold" }}>
                          {data.report}
                        </Typography>
                      </Grid>

                      <Grid item xs={3} sx={{}}>
                        <Typography sx={{ py: 2, fontWeight: "bold" }}>
                          {data.email}
                        </Typography>
                      </Grid>
                      <Grid item xs={3} sx={{}}>
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
                </>
              ))}
            </Box>
            {data.length < 1 && (
              <Box mx={{ sm: 10, xs: 5 }}>
                <Tilt options={{ max: 5, speed: 50, scale: 1 }}>
                  <Grid
                    container
                    sx={{
                      boxShadow: "5",
                      backgroundColor: "white",
                    }}
                  >
                    <Grid item xs={3} sx={{}}>
                      <Typography sx={{ py: 2, fontWeight: "bold" }}>
                        N/A
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{}}>
                      <Typography sx={{ py: 2, fontWeight: "bold" }}>
                        N/A
                      </Typography>
                    </Grid>
                    <Grid item xs={3} sx={{}}>
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
            )}
          </>
        )}
      </Box>
    </>
  );
};

export default ReportedItems;
