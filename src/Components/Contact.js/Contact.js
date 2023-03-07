import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import RoomIcon from "@mui/icons-material/Room";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import { motion } from "framer-motion";

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
      <Box py={10} overflow={"hidden"}>
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

        <Box sx={{ mx: { xs: 5, md: 5 } }}>
          <Grid container rowSpacing={2} columnSpacing={5}>
            <Grid item xs={12} md={6}>
              {/* <motion.div
                initial={{ x: -350, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              ></motion.div> */}
              <motion.div
                initial={{ x: -350, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <Typography
                  sx={{
                    textAlign: { xs: "center", md: "start" },
                    fontSize: "30px",
                    fontWeight: "bold",
                  }}
                >
                  We Love to Hear From You
                </Typography>
                <Typography
                  sx={{ textAlign: "start", fontSize: "16px", mt: 2, mb: 5 }}
                >
                  Vestibulum volutpat, lacus a ultrices sagittis, mi neque
                  euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus
                  pede arcu, dapibus eu, fermentum et.
                </Typography>
              </motion.div>

              <Grid
                container
                rowSpacing={{ xs: 5, sm: 10 }}
                //justifyContent={"center"}
              >
                <Grid item sm={6}>
                  <Typography
                    sx={{
                      textAlign: "start",
                      fontFamily: "jost",
                      fontWeight: "bold",
                      fontSize: "25px",
                      pl: 3,
                      mb: 1,
                    }}
                  >
                    The Office
                  </Typography>

                  <Grid container spacing={2} alignItems={"center"}>
                    <Grid item xs={3}>
                      <RoomIcon></RoomIcon>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography
                        sx={{ textAlign: "start", fontFamily: "jost" }}
                      >
                        Fifth Avenue 5501,<br></br>Broadway, New York{" "}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sm={6}>
                  <Typography
                    sx={{
                      textAlign: "start",
                      fontFamily: "jost",
                      fontWeight: "bold",
                      fontSize: "25px",
                      pl: 3,
                      mb: 1,
                    }}
                  >
                    The Branch
                  </Typography>

                  <Grid container spacing={2} alignItems={"center"}>
                    <Grid item xs={3}>
                      <FormatAlignJustifyIcon></FormatAlignJustifyIcon>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography
                        sx={{ textAlign: "start", fontFamily: "jost" }}
                      >
                        Dhanmondi Avenue 5501,<br></br>Dhaka{" "}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sm={6}>
                  <Typography
                    sx={{
                      textAlign: "start",
                      fontFamily: "jost",
                      fontWeight: "bold",
                      fontSize: "25px",
                      pl: 3,
                      mb: 1,
                    }}
                  >
                    Contact Information
                  </Typography>

                  <Grid container spacing={2} alignItems={"center"}>
                    <Grid item xs={3}>
                      <ContactEmergencyIcon></ContactEmergencyIcon>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography
                        sx={{ textAlign: "start", fontFamily: "jost" }}
                      >
                        info@example.com<br></br>mdshehab00@gmail.com{" "}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sm={6}>
                  <Typography
                    sx={{
                      textAlign: "start",
                      fontFamily: "jost",
                      fontWeight: "bold",
                      fontSize: "25px",
                      pl: 3,
                      mb: 1,
                    }}
                  >
                    Our Business Hours
                  </Typography>

                  <Grid container spacing={2} alignItems={"center"}>
                    <Grid item xs={3}>
                      <WorkOutlineIcon></WorkOutlineIcon>
                    </Grid>
                    <Grid item xs={9}>
                      <Typography
                        sx={{ textAlign: "start", fontFamily: "jost" }}
                      >
                        Monday - Friday:8am - 4pm,<br></br>Saturday, Sunday:9am
                        - 5pm
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ x: -350, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <Typography
                  sx={{
                    textAlign: "start",
                    fontSize: "30px",
                    fontWeight: "bold",
                  }}
                >
                  Leave A Message
                </Typography>
                <Typography
                  sx={{ textAlign: "start", fontSize: "16px", my: 2 }}
                >
                  Use the form below to get in touch with the sales team
                </Typography>
              </motion.div>{" "}
              <form ref={form} onSubmit={sendEmail}>
                <Grid item xs={12} sx={{ my: 3 }}>
                  <motion.div
                    initial={{ x: -350, opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <TextField
                      style={{ width: "100%" }}
                      id="outlined-error-helper-text"
                      label="Full Name"
                      name="user_name"
                      placeholder="Enter Full Name..."
                    />{" "}
                  </motion.div>
                </Grid>{" "}
                <Grid item xs={12} sx={{ my: 3 }}>
                  <motion.div
                    initial={{ x: -350, opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <TextField
                      style={{ width: "100%" }}
                      id="outlined-error-helper-text"
                      label="Email"
                      name="user_email"
                      placeholder="Enter contact email..."
                    />{" "}
                  </motion.div>{" "}
                </Grid>{" "}
                <Grid item xs={12}>
                  <motion.div
                    initial={{ x: -350, opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                  >
                    <TextField
                      style={{ width: "100%" }}
                      placeholder="Enter Message"
                      name="message"
                      multiline
                      rows={4}
                      sx={{ mb: 3 }}
                    />{" "}
                  </motion.div>{" "}
                </Grid>{" "}
                <Grid item xs={12}>
                  <motion.div
                    initial={{ x: -350, opacity: 0 }}
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
              </form>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
