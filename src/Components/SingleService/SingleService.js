import {
  Box,
  Button,
  Divider,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../Context/Context";
import Loader from "../Small/Loader/Loader";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      height: "26px", // change the height to your desired value
      borderRadius: 0,
    },
  },
});

const SingleService = () => {
  const classes = useStyles();
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const [route, setRoute] = useState(0);
  console.log(data, user);
  const [spin, setSpin] = React.useState(false);
  //console.log(data.price);
  const description = data.description.split(".");
  //console.log(description);

  const images = [
    {
      original: data.img1,
      thumbnail: data.img1,
    },
    {
      original: data.img2,
      thumbnail: data.img2,
    },
    {
      original: data.img3,
      thumbnail: data.img3,
    },
  ];

  const handleForm = (event) => {
    event.preventDefault();
    setSpin(true);

    const form = event.target;
    const quantity = form.quantity.value;
    const location = form.location.value;
    let time = new Date().toString().slice(4, 21);
    const uid = user.uid;
    //console.log(quantity, location);

    const userr = {
      name: data.name,
      price: data.price,
      quantity: quantity,
      location: location,
      time: time,
      uid: uid,
    };

    fetch("http://localhost:5000/addtocart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userr),
    })
      .then((res) => res.json())
      .then((dataa) => {
        setSpin(false);
        if (dataa.acknowledged === true) {
          toast.success("Added To Cart");
          form.reset();
        } else {
          toast.error("Try Again");
        }
      });
  };
  const handleReport = (event) => {
    setSpin(true);
    event.preventDefault();

    const form = event.target;
    const report = form.report.value;

    //console.log(report);
    const userr = {
      pid: data.pid,
      report: report,
      email: user.email,
    };
    console.log(userr);
    fetch("http://localhost:5000/savereport", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userr),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.acknowledged) {
          //window.location.reload(false);
          setSpin(false);
          toast.success("Submitted");
          // console.log("successfull");
        } else {
          setSpin(false);
          toast.error("Error");
          // console.log("unsucess");
        }
        setRoute(0);
      });
  };

  return (
    <Box sx={{ m: 10 }}>
      <ToastContainer position="top-center" autoClose={1000} />
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              {" "}
              <Typography
                sx={{
                  fontFamily: "jest",
                  textAlign: "start",
                  letterSpacing: "2px",
                }}
              >
                {data.name}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "jest",
                  textAlign: "start",
                  letterSpacing: "2px",
                  fontSize: "14px",
                  opacity: 0.5,
                  mb: 1,
                }}
              >
                {data.pid}
              </Typography>
            </Box>
            <Box>
              {route === 0 ? (
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
                    mt: 2,
                    mb: 2,
                  }}
                  onClick={() => {
                    setRoute(1);
                  }}
                >
                  Report Item
                </Button>
              ) : spin === true ? (
                <Box width={"10px"} height={"1px"} px={10} py={3}>
                  <Loader></Loader>
                </Box>
              ) : (
                <form onSubmit={handleReport}>
                  <TextField
                    sx={{ mt: 2, mr: 1, fontFamily: "jest" }}
                    variant="outlined"
                    name="report"
                    className={classes.root}
                    placeholder={"Reason"}
                    // onChange={(event) => {
                    //   setList(event.target.value);
                    // }}
                  />
                  <Button
                    variant="contained"
                    size="small"
                    type="submit"
                    sx={{
                      fontFamily: "jest",
                      letterSpacing: "1px",
                      backgroundColor: "#222222",
                      "&:hover": {
                        background: "#6e3e37",
                      },
                      fontSize: "10px",
                      mt: 2,
                      mb: 2,
                    }}
                  >
                    Submit
                  </Button>
                </form>
              )}
            </Box>
          </Box>

          <Divider></Divider>
        </Box>
      </motion.div>

      <Box>
        <Grid container spacing={5} my={2}>
          <Grid item xs={12} sm={6}>
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Tilt className="Tilt" options={{ max: 5, scale: 1, speed: 100 }}>
                <Box sx={{ border: 5, borderColor: "#f6f6f4" }}>
                  {" "}
                  <ImageGallery items={images} />
                </Box>
              </Tilt>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} p={5} textAlign={"start"}>
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography
                sx={{ fontWeight: "bold", py: 1, fontFamily: "jest" }}
              >
                Description
              </Typography>
              {description.map((des) => (
                <Typography sx={{ fontFamily: "jest" }}>• {des}</Typography>
              ))}
              <Typography
                sx={{ fontFamily: "jest", letterSpacing: "2px", mt: 5 }}
              >
                Price : ৳ {data.price}
              </Typography>
              <Typography sx={{ fontFamily: "jest", letterSpacing: "2px" }}>
                Quality : {data.quality}
              </Typography>
              <Typography sx={{ fontFamily: "jest", letterSpacing: "2px" }}>
                Sold : {data.sold} Times
              </Typography>
              <Typography sx={{ fontFamily: "jest", letterSpacing: "2px" }}>
                Admin Approved :{" "}
                <span style={{ textTransform: "uppercase" }}>
                  {data.recommended}
                </span>
              </Typography>
              <form onSubmit={handleForm}>
                <Box sx={{ backgroundColor: "#E6E6E4", p: 5, mt: 4 }}>
                  {spin === true ? (
                    <Box my={0}>
                      <Loader></Loader>
                    </Box>
                  ) : (
                    <>
                      <TextField
                        id="outlined-basic"
                        label="Quantity"
                        type="number"
                        variant="outlined"
                        name="quantity"
                        sx={{ mt: 2 }}
                        required
                      />
                      <TextField
                        id="outlined-basic"
                        label="Exact Location"
                        type="text"
                        variant="outlined"
                        name="location"
                        sx={{ mt: { xs: 2 }, ml: { lg: 2 } }}
                        required
                      />
                      <br></br>
                      <Button
                        variant="outlined"
                        size="large"
                        type="submit"
                        sx={{ mt: 2 }}
                      >
                        Add To Cart
                      </Button>
                    </>
                  )}
                </Box>
              </form>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default SingleService;
