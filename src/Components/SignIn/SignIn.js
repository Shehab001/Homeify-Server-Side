import { Box } from "@mui/system";
import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { AuthContext } from "../../Context/Context";
import { GoogleAuthProvider } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoogleIcon from "@mui/icons-material/Google";
import Loader from "../Small/Loader/Loader";

const SignIn = () => {
  const { setAuthControl, signIn, providerLogin, toggleDrawer, anchor } =
    useContext(AuthContext);
  const [error, setError] = React.useState("");
  const [spin, setSpin] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();

  const jwt = (user) => {
    //jwt
    fetch("https://homeify-server.vercel.app/jwt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => localStorage.setItem("token", data.token));
  };

  const handleBtn = () => {
    // signInWithPopup(googleProvider)
    setSpin(true);

    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        // setUser(user);
        saveUser(user.email, user.uid);
        jwt(user);
        setSpin(false);
        toast.success("Logged In");
        navigate(from, { replace: true });
        toggleDrawer(anchor, false);
        //console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const saveUser = (email, uid) => {
    //console.log(name, url, email);
    const userr = {
      email: email,
      role: "buyer",
      uid: uid,
    };
    console.log(userr);
    fetch("https://homeify-server.vercel.app/saveuser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userr),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.upsertedId) {
          toast.success("User Added");
          // console.log("successfull");
        } else {
          //toast.error("Canceled");
          // console.log("unsucess");
        }
      });
  };

  const handleForm = (event) => {
    setSpin(true);
    event.preventDefault();

    const form = event.target;
    const name = form.email.value;
    const pass = form.password.value;
    //console.log(name, pass);
    //console.log(loading);

    signIn(name, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential;
        jwt(user);
        setSpin(false);
        toast.success("Logged In");
        setError("");
        //setUser(user);
        // console.log(user);
        toggleDrawer(anchor, false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setSpin(false);
        const errorMessage = error.message;
        setError("Invalid Credentials");
      });
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={1000} />
      {spin === true ? (
        <Box sx={{ height: "100vh" }}>
          <Loader></Loader>
        </Box>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Tilt
              className="Tilt"
              options={{ max: 5, scale: 1, speed: 5, transition: false }}
            >
              <Box sx={{ width: "90%", mt: 5, mx: "auto" }} role="presentation">
                <Grid
                  item
                  xs={12}
                  sm={8}
                  md={5}
                  component={Paper}
                  elevation={6}
                  square
                >
                  <Box
                    sx={{
                      my: 8,
                      mx: 4,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      py: 5,
                    }}
                  >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      Sign in
                    </Typography>
                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleForm}
                      sx={{ mt: 1 }}
                    >
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                      <FormControlLabel
                        control={
                          <Checkbox value="remember" color="primary" required />
                        }
                        label="Remember me"
                      />
                      <Typography sx={{ textAlign: "start", color: "red" }}>
                        {error}
                      </Typography>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign In
                      </Button>

                      <Typography
                        onClick={() => {
                          setAuthControl("signup");
                        }}
                        sx={{ cursor: "pointer" }}
                      >
                        "Don't have an account? Sign Up"
                      </Typography>
                    </Box>
                    <Box>
                      <GoogleIcon
                        sx={{
                          mt: 3,
                          fontSize: "40px",
                          color: "#1976d2",
                          cursor: "pointer",
                          "&:hover": { transform: "scale(1.2)" },
                        }}
                        onClick={handleBtn}
                      ></GoogleIcon>
                    </Box>
                  </Box>
                </Grid>
              </Box>
            </Tilt>
          </motion.div>
        </>
      )}
    </>
  );
};

export default SignIn;
