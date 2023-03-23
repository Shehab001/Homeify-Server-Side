import { Box, Grid, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import Tilt from "react-tilt";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../../Context/Context";
import Loader from "../../Small/Loader/Loader";

const AdminAllUser = (props) => {
  const [id, setId] = useState([]);
  const { user, freshh, setFreshh } = useContext(AuthContext);
  const [spin, setSpin] = useState(false);
  console.log(id);
  const handleDelete = () => {
    setSpin(true);
    fetch(`http://localhost:5000/deleteuser/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setSpin(false);
          toast.success("Deleted");
          setFreshh(!freshh);
        } else {
          toast.error("Error");
        }
      });
  };
  return (
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
                    Name
                  </Typography>
                </Grid>
                <Grid item xs={3} sx={{}}>
                  <Typography sx={{ py: 2, fontWeight: "bold" }}>
                    Email
                  </Typography>
                </Grid>

                <Grid item xs={3} sx={{}}>
                  <Typography sx={{ py: 2, fontWeight: "bold" }}>
                    Contact
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
            {props.data.map(
              (data) =>
                data.role === "user" && (
                  <>
                    {console.log(data.role)}
                    <Tilt options={{ max: 15, speed: 50, scale: 1 }}>
                      <Grid
                        container
                        sx={{ boxShadow: "5", backgroundColor: "white", mb: 1 }}
                      >
                        <Grid item xs={3} sx={{}}>
                          <Typography sx={{ py: 2, fontWeight: "bold" }}>
                            {data.name}
                          </Typography>
                        </Grid>
                        <Grid item xs={3} sx={{}}>
                          <Typography sx={{ py: 2, fontWeight: "bold" }}>
                            {data.email}
                          </Typography>
                        </Grid>

                        <Grid item xs={3} sx={{}}>
                          <Typography sx={{ py: 2, fontWeight: "bold" }}>
                            {data.phn}
                          </Typography>
                        </Grid>
                        <Grid item xs={3} sx={{}}>
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
                  </>
                )
            )}
          </Box>
        </>
      )}
    </Box>
  );
};

export default AdminAllUser;
