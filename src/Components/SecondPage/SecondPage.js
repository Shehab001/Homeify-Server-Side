import { Box } from "@mui/system";
import React from "react";
import Grid from "@mui/material/Grid";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import PaymentIcon from "@mui/icons-material/Payment";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { motion } from "framer-motion";

const SecondPage = () => {
  return (
    <>
      <Box sx={{ my: 10, mx: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Grid container spacing={2} sx={{ alignItems: "center" }}>
              <Grid item xs={3}>
                <motion.div
                  initial={{ y: 150, opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <LocalMallIcon
                    sx={{
                      fontSize: "60px",
                      p: 1,
                      cursor: "pointer",
                      "&:hover": { transform: "rotate(30deg)" },
                    }}
                  ></LocalMallIcon>
                </motion.div>
              </Grid>
              <Grid item xs={9}>
                <motion.div
                  initial={{ y: 150, opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      letterSpacing: "2px",
                      textAlign: "start",
                    }}
                  >
                    SHOP ONLINE
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "start",
                      opacity: 0.5,
                      fontSize: "14px",
                      mt: 1,
                    }}
                  >
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    ommodo.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Grid container spacing={2} sx={{ alignItems: "center" }}>
              <Grid item xs={3}>
                <motion.div
                  initial={{ y: 150, opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  {" "}
                  <LocalAtmIcon
                    sx={{
                      fontSize: "60px",
                      p: 1,
                      "&:hover": { transform: "rotate(30deg)" },
                    }}
                  ></LocalAtmIcon>
                </motion.div>
              </Grid>
              <Grid item xs={9}>
                <motion.div
                  initial={{ y: 150, opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  {" "}
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      letterSpacing: "2px",
                      textAlign: "start",
                    }}
                  >
                    FREE SHIPPING
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "start",
                      opacity: 0.5,
                      fontSize: "14px",
                      mt: 1,
                    }}
                  >
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    ommodo.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Grid container spacing={2} sx={{ alignItems: "center" }}>
              <Grid item xs={3}>
                <motion.div
                  initial={{ y: 150, opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <QueryBuilderIcon
                    sx={{
                      fontSize: "60px",
                      p: 1,
                      "&:hover": { transform: "rotate(30deg)" },
                    }}
                  ></QueryBuilderIcon>
                </motion.div>
              </Grid>
              <Grid item xs={9}>
                <motion.div
                  initial={{ y: 150, opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      letterSpacing: "2px",
                      textAlign: "start",
                    }}
                  >
                    RETURN POLICY
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "start",
                      opacity: 0.5,
                      fontSize: "14px",
                      mt: 1,
                    }}
                  >
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    ommodo.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3}>
            <Grid container spacing={2} sx={{ alignItems: "center" }}>
              <Grid item xs={3}>
                <motion.div
                  initial={{ y: 150, opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <PaymentIcon
                    sx={{
                      fontSize: "60px",
                      p: 1,
                      "&:hover": { transform: "rotate(30deg)" },
                    }}
                  ></PaymentIcon>
                </motion.div>
              </Grid>
              <Grid item xs={9}>
                <motion.div
                  initial={{ y: 150, opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  {" "}
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      letterSpacing: "2px",
                      textAlign: "start",
                    }}
                  >
                    PAYMENT METHODS
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "start",
                      opacity: 0.5,
                      fontSize: "14px",
                      mt: 1,
                    }}
                  >
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    ommodo.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Divider />
    </>
  );
};

export default SecondPage;
