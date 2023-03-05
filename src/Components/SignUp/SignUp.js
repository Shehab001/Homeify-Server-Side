import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthContext } from "../../Context/Context";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Small/Loader/Loader";
import { useLocation, useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignUp() {
  const {
    setAuthControl,
    createUser,
    updateUserProfile,
    toggleDrawer,
    anchor,
  } = React.useContext(AuthContext);
  const [error, setError] = React.useState("");
  const [spin, setSpin] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    setSpin(true);
    event.preventDefault();
    // setSuccess(false);

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const img = form.img.value;
    console.log(name, password, img, email);

    if (password.length < 6) {
      setError("Password should be 6 characters or more.");
      return;
    }

    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // setSuccess(true);
        form.reset();
        setError("");

        handleUpdateUserProfile(img, name);
        setSpin(false);
        navigate(from, { replace: true });
        toast.success("Logged In");
        toggleDrawer(anchor, false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
    const handleUpdateUserProfile = (img, name) => {
      const profile = {
        photoURL: img,
        displayName: name,
      };
      console.log(profile);
      updateUserProfile(profile)
        .then(() => {})
        .catch((error) => console.error(error));
    };
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={1000} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {spin === true ? (
          <Box sx={{ height: "100vh" }}>
            <Loader></Loader>
          </Box>
        ) : (
          <>
            <Tilt className="Tilt" options={{ max: 5, scale: 1, speed: 5 }}>
              <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <Box
                    sx={{
                      marginTop: 8,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      pt: 5,
                    }}
                  >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      Sign up
                    </Typography>
                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleSubmit}
                      sx={{ mt: 3 }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                          <TextField
                            autoComplete="given-name"
                            name="name"
                            required
                            fullWidth
                            id="firstName"
                            label="First Name"
                            autoFocus
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                          />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                          <TextField
                            required
                            fullWidth
                            id="lastName"
                            label="Image Link"
                            name="img"
                            autoComplete="family-name"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormControlLabel
                            control={
                              <Checkbox
                                value="allowExtraEmails"
                                color="primary"
                                required
                              />
                            }
                            label="Remember Me"
                          />
                        </Grid>
                      </Grid>
                      <Typography sx={{ textAlign: "start", color: "red" }}>
                        {error}
                      </Typography>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign Up
                      </Button>
                      <Grid container justifyContent="flex-end">
                        <Grid item>
                          <Typography
                            onClick={() => {
                              setAuthControl("signin");
                            }}
                            sx={{ cursor: "pointer" }}
                          >
                            Already have an account? Sign in
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Container>
              </ThemeProvider>
            </Tilt>
          </>
        )}
      </motion.div>
    </>
  );
}
