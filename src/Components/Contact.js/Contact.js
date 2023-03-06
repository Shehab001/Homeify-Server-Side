import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gfqrgba",
        "template_fotyp3h",
        form.current,
        "WehNcLX2SaPrdq4Yq"
      )
      .then(
        (result) => {
          //console.log(result.text);
          toast.success("Sent");
        },
        (error) => {
          toast.error("Failed");
        }
      );
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={1000} />
      <Divider></Divider>
      <Box py={10}>
        <Typography
          sx={{
            color: "black",
            fontSize: { xs: "20px", md: "40px" },
            textAlign: "center",
            fontWeight: "bold",
            letterSpacing: "5px",
            mb: 10,
          }}
        >
          Contact Us
        </Typography>
        <Box></Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item md={6}>
                  {" "}
                  <Grid container spacing={2}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={9}></Grid>
                  </Grid>
                </Grid>
                <Grid item md={6}>
                  {" "}
                  <Grid container spacing={2}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={9}></Grid>
                  </Grid>
                </Grid>
                <Grid item md={6}>
                  {" "}
                  <Grid container spacing={2}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={9}></Grid>
                  </Grid>
                </Grid>
                <Grid item md={6}>
                  {" "}
                  <Grid container spacing={2}>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={9}></Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} px={20}>
              {" "}
              <form ref={form} onSubmit={sendEmail}>
                <Grid item xs={12} sx={{ my: 3 }}>
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-error-helper-text"
                    label="Full Name"
                    name="user_name"
                    placeholder="Enter Full Name..."
                  />{" "}
                </Grid>{" "}
                <Grid item xs={12} sx={{ my: 3 }}>
                  {" "}
                  <TextField
                    style={{ width: "100%" }}
                    id="outlined-error-helper-text"
                    label="Email"
                    name="user_email"
                    placeholder="Enter contact email..."
                  />{" "}
                </Grid>{" "}
                <Grid item xs={12}>
                  {" "}
                  <TextField
                    style={{ width: "100%" }}
                    placeholder="Enter Message"
                    name="message"
                    multiline
                    rows={4}
                    sx={{ mb: 3 }}
                  />{" "}
                </Grid>{" "}
                <Grid item xs={12}>
                  {" "}
                  <Button
                    type="submit"
                    style={{ width: "100%" }}
                    variant="contained"
                  >
                    {" "}
                    Send Message{" "}
                  </Button>{" "}
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
