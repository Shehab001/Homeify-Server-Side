import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import { Link, useNavigate } from "react-router-dom";
import ChairIcon from "@mui/icons-material/Chair";
import { motion } from "framer-motion";
import SignUp from "../SignUp/SignUp";
import { AuthContext } from "../../Context/Context";
import SignIn from "../SignIn/SignIn";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
  const { user, logOut, authControl, toggleDrawer, state, setState } =
    React.useContext(AuthContext);
  //console.log(user?.uid);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  let navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  console.log(state);

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 400,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <Divider />
      {authControl === "signin" ? (
        <>
          <SignIn></SignIn>
        </>
      ) : (
        <>
          <SignUp></SignUp>
        </>
      )}

      <Divider />
    </Box>
  );

  const handleBtn = () => {
    logOut()
      .then(() => {
        toast.success("Logged Out");
        setState((prevState) => {
          let right = Object.assign({}, prevState.right); // creating copy of state variable right
          console.log(right);
          right = false; // update the name property, assign a new value
          return { right }; // return new object jasper object
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <motion.div
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.2, type: "spring" }}
    >
      <ToastContainer position="top-center" autoClose={1000} />
      <AppBar
        position="static"
        sx={{ px: { md: 5, xs: 0 }, backgroundColor: "white", color: "black" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to="/" style={{ color: "black" }}>
              <ChairIcon
                sx={{
                  fontSize: { xs: "40px", md: "50px" },
                  mr: 1,
                  display: { xs: "none", md: "flex" },

                  "&:hover": {
                    transform: "Scale(1.1)",
                  },
                }}
              ></ChairIcon>
            </Link>

            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "overpass,sherif-pro",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Homeify
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {/* small */}

                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#6e3e37",
                    },
                  }}
                >
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Typography
                      textAlign="center"
                      sx={{
                        color: "black",
                      }}
                    >
                      Home
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#6e3e37",
                    },
                  }}
                >
                  <Link to="/product" style={{ textDecoration: "none" }}>
                    <Typography textAlign="center" sx={{ color: "black" }}>
                      Products
                    </Typography>
                  </Link>
                </MenuItem>

                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#6e3e37",
                    },
                  }}
                >
                  <Link to="aboutus" style={{ textDecoration: "none" }}>
                    <Typography textAlign="center" sx={{ color: "black" }}>
                      About Us
                    </Typography>
                  </Link>
                </MenuItem>
                <MenuItem
                  onClick={handleCloseNavMenu}
                  sx={{
                    "&:hover": {
                      backgroundColor: "#6e3e37",
                    },
                  }}
                >
                  <Link to="contact" style={{ textDecoration: "none" }}>
                    <Typography textAlign="center" sx={{ color: "black" }}>
                      Contact
                    </Typography>
                  </Link>
                </MenuItem>
                {user?.uid && (
                  <>
                    {" "}
                    <MenuItem
                      onClick={handleCloseNavMenu}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#6e3e37",
                        },
                      }}
                    >
                      <Link to="/dashboard" style={{ textDecoration: "none" }}>
                        <Typography textAlign="center" sx={{ color: "black" }}>
                          Dashboard
                        </Typography>
                      </Link>
                    </MenuItem>
                    <MenuItem
                      onClick={handleCloseNavMenu}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#6e3e37",
                        },
                      }}
                    >
                      <Typography
                        textAlign="center"
                        sx={{ color: "black" }}
                        onClick={handleBtn}
                      >
                        Log Out
                      </Typography>
                    </MenuItem>
                  </>
                )}
              </Menu>
            </Box>
            <Link to="/" style={{ color: "black" }}>
              {" "}
              <ChairIcon
                sx={{
                  fontSize: { xs: "40px", md: "50px" },
                  mr: 1,
                  display: { xs: "flex", md: "none" },
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
              ></ChairIcon>
            </Link>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                fontFamily: "overpass,sherif-pro",
              }}
            >
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Homeify
              </Link>
            </Typography>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontFamily: "overpass,sherif-pro",
                    "&:hover": {
                      backgroundColor: "#6e3e37",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  Home
                </Button>
              </Link>
              <Link to="/products" style={{ textDecoration: "none" }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontFamily: "overpass,sherif-pro",
                    "&:hover": {
                      backgroundColor: "#6e3e37",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  Products
                </Button>
              </Link>
              <Link to="aboutus" style={{ textDecoration: "none" }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontFamily: "overpass,sherif-pro",
                    "&:hover": {
                      backgroundColor: "#6e3e37",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  About Us
                </Button>
              </Link>
              <Link to="contact" style={{ textDecoration: "none" }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontFamily: "overpass,sherif-pro",
                    "&:hover": {
                      backgroundColor: "#6e3e37",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  Contact
                </Button>
              </Link>
              {user?.uid && (
                <>
                  <Link to="/dashboard" style={{ textDecoration: "none" }}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "black",
                        display: "block",
                        fontFamily: "overpass,sherif-pro",
                        "&:hover": {
                          backgroundColor: "#6e3e37",
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      Dashboard
                    </Button>
                  </Link>

                  <Box onClick={handleBtn}>
                    <Button
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "black",
                        display: "block",
                        fontFamily: "overpass,sherif-pro",
                        "&:hover": {
                          backgroundColor: "#6e3e37",
                          transform: "scale(1.1)",
                        },
                      }}
                    >
                      Log Out
                    </Button>
                  </Box>
                </>
              )}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Box>
                {/* <SearchOutlinedIcon
                  sx={{
                    fontSize: { xs: "25px", md: "30px" },
                    cursor: "pointer",
                    "&:hover": {
                      transform: "scale(1.7)",
                    },
                  }}
                ></SearchOutlinedIcon> */}
                <Link to="/cart">
                  <LocalMallOutlinedIcon
                    sx={{
                      fontSize: { xs: "25px", md: "30px" },
                      mx: 2,
                      cursor: "pointer",
                      "&:hover": {
                        transform: "scale(1.7)",
                      },
                    }}
                  ></LocalMallOutlinedIcon>
                </Link>

                {!user?.uid && (
                  <>
                    {["right"].map((anchor) => (
                      <React.Fragment key={anchor}>
                        <Person2OutlinedIcon
                          sx={{
                            fontSize: { xs: "25px", md: "30px" },
                            cursor: "pointer",
                            "&:hover": {
                              transform: "scale(1.7)",
                            },
                          }}
                          onClick={toggleDrawer(anchor, true)}
                        ></Person2OutlinedIcon>
                        <Drawer
                          anchor={anchor}
                          open={state[anchor]}
                          onClose={toggleDrawer(anchor, false)}
                        >
                          {list(anchor)}
                        </Drawer>
                      </React.Fragment>
                    ))}
                  </>
                )}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </motion.div>
  );
}
export default Navbar;
