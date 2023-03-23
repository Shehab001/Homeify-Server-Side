import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { motion } from "framer-motion";
import { AuthContext } from "../../../Context/Context";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../../Small/Loader/Loader";

const SellerAddProduct = () => {
  const { user } = useContext(AuthContext);
  const [spin, setSpin] = useState(false);
  const currencies = [
    {
      value: "Living",
      label: "Living",
    },
    {
      value: "Bedroom",
      label: "Bedroom",
    },
    {
      value: "Kitchen",
      label: "Kitchen",
    },
    {
      value: "Institute",
      label: "Institute",
    },
    {
      value: "Door",
      label: "Door",
    },
    {
      value: "Interior",
      label: "Interior",
    },
  ];

  const addProduct = (event) => {
    event.preventDefault();
    setSpin(true);

    const form = event.target;
    const category = form.category.value;
    const name = form.name.value;
    const pid = form.pid.value;
    const email = user.email;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const quality = form.quality.value;
    const rating = form.rating.value;
    const img1 = form.img1.value;
    const img2 = form.img2.value;
    const img3 = form.img3.value;
    const des = form.des.value;

    const value = {
      category: category,
      name: name,
      pid: pid,
      seller: email,
      price: price,
      quality: quality,
      quantity: quantity,
      rating: rating,
      advertised: "no",
      sold: "234",
      recommended: "Yes",
      img1: img1,
      img2: img3,
      img3: img3,
      description: des,
    };
    console.log(value);

    fetch("http://localhost:5000/addproduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then((dataa) => {
        setSpin(false);
        if (dataa.acknowledged === true) {
          toast.success("Added");
          form.reset();
        } else {
          toast.error("Try Again");
        }
      });
  };
  return (
    <Box mb={10} mx={10} overflow={"hidden"}>
      <ToastContainer position="top-center" autoClose={500} />
      {spin === true ? (
        <Box sx={{ py: 20 }}>
          <Loader></Loader>
        </Box>
      ) : (
        <>
          <form onSubmit={addProduct}>
            <Grid container rowSpacing={0} columnSpacing={2}>
              <Grid item xs={6} sx={{ my: 2 }}>
                <motion.div
                  initial={{ x: 350, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <TextField
                    required
                    style={{ width: "100%" }}
                    id="outlined-select-currency"
                    select
                    label="Select"
                    defaultValue="Living"
                    helperText="Please Select Category"
                    name="category"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </motion.div>
              </Grid>{" "}
              <Grid item xs={6} sx={{ my: 2 }}>
                <motion.div
                  initial={{ x: 350, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <TextField
                    required
                    style={{ width: "100%" }}
                    id="outlined-error-helper-text"
                    label="Product Name"
                    name="name"
                    placeholder="Enter Full Name..."
                  />{" "}
                </motion.div>
              </Grid>{" "}
              <Grid item xs={6} sx={{ mb: 2 }}>
                <motion.div
                  initial={{ x: 350, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <TextField
                    required
                    style={{ width: "100%" }}
                    id="outlined-error-helper-text"
                    label="Product ID"
                    name="pid"
                    placeholder="Product ID"
                  />{" "}
                </motion.div>{" "}
              </Grid>{" "}
              <Grid item xs={6} sx={{ mb: 2 }}>
                <motion.div
                  initial={{ x: 350, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <TextField
                    required
                    style={{ width: "100%" }}
                    id="outlined-error-helper-text"
                    label="Seller Email"
                    name="email"
                    placeholder="Seller Email"
                  />{" "}
                </motion.div>{" "}
              </Grid>
              <Grid item xs={6} sx={{ my: 2 }}>
                <motion.div
                  initial={{ x: 350, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <TextField
                    required
                    style={{ width: "100%" }}
                    id="outlined-error-helper-text"
                    label="Quality"
                    name="quality"
                    placeholder="Used/New"
                  />{" "}
                </motion.div>
              </Grid>{" "}
              <Grid item xs={6} sx={{ my: 2 }}>
                <motion.div
                  initial={{ x: 350, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <TextField
                    required
                    style={{ width: "100%" }}
                    id="outlined-error-helper-text"
                    label="Quantity"
                    name="quantity"
                    placeholder="Input Number"
                  />{" "}
                </motion.div>{" "}
              </Grid>
              <Grid item xs={6} sx={{ my: 2 }}>
                <motion.div
                  initial={{ x: 350, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <TextField
                    required
                    style={{ width: "100%" }}
                    id="outlined-error-helper-text"
                    label="Price"
                    name="price"
                    placeholder="Price"
                  />{" "}
                </motion.div>
              </Grid>{" "}
              <Grid item xs={6} sx={{ my: 2 }}>
                <motion.div
                  initial={{ x: 350, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <TextField
                    required
                    style={{ width: "100%" }}
                    id="outlined-error-helper-text"
                    label="Rating"
                    name="rating"
                    placeholder="Rating in 5"
                  />{" "}
                </motion.div>{" "}
              </Grid>
              <Grid item xs={4} sx={{ my: 2 }}>
                <motion.div
                  initial={{ x: 350, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <TextField
                    required
                    style={{ width: "100%" }}
                    id="outlined-error-helper-text"
                    label="Image"
                    name="img1"
                    placeholder="Image Link"
                  />{" "}
                </motion.div>
              </Grid>{" "}
              <Grid item xs={4} sx={{ my: 2 }}>
                <motion.div
                  initial={{ x: 350, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <TextField
                    required
                    style={{ width: "100%" }}
                    id="outlined-error-helper-text"
                    label="Image"
                    name="img2"
                    placeholder="Image Link"
                  />
                </motion.div>{" "}
              </Grid>
              <Grid item xs={4} sx={{ my: 2 }}>
                <motion.div
                  initial={{ x: 350, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <TextField
                    required
                    style={{ width: "100%" }}
                    id="outlined-error-helper-text"
                    label="Image"
                    name="img3"
                    placeholder="Image Link"
                  />
                </motion.div>
              </Grid>{" "}
              <Grid item xs={12}>
                <motion.div
                  initial={{ x: 350, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <TextField
                    required
                    style={{ width: "100%" }}
                    placeholder="Enter Description & avoid full stop in last line.."
                    name="des"
                    multiline
                    rows={4}
                    sx={{ mb: 3 }}
                  />{" "}
                </motion.div>{" "}
              </Grid>{" "}
              <Grid item xs={12}>
                <motion.div
                  initial={{ x: 350, opacity: 0 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Button
                    type="submit"
                    style={{ width: "100%" }}
                    variant="contained"
                  >
                    {" "}
                    Send Message{" "}
                  </Button>{" "}
                </motion.div>{" "}
              </Grid>
            </Grid>
          </form>
        </>
      )}
    </Box>
  );
};

export default SellerAddProduct;
