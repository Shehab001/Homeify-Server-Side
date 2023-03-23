import { Box } from "@mui/system";
import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../Components/AboutUs/AboutUs";
import OurTeam from "../Components/AboutUs/OurTeam";
import Carousal from "../Components/Carousal/Carousal";
import Contact from "../Components/Contact.js/Contact";
import Dashboard from "../Components/Dashboard/Dashboard";
import UserDashboard from "../Components/Dashboard/User/UserDashboard";
import Navbar from "../Components/Navbar/Navbar";
import Cart from "../Components/Product/Cart";
import Category from "../Components/Product/Category";
import ProductNavbar from "../Components/Product/ProductNavbar";
import SecondPage from "../Components/SecondPage/SecondPage";
import SingleService from "../Components/SingleService/SingleService";
import Home from "../Layout/Home";
import Main from "../Layout/Main";
import Private from "../Layout/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "aboutus",
        element: (
          <>
            <Carousal></Carousal>
            <AboutUs></AboutUs>
            <OurTeam></OurTeam>
          </>
        ),
      },
      {
        path: "/contact",
        element: (
          <>
            <Carousal></Carousal>
            <Contact></Contact>
          </>
        ),
      },
      {
        path: "/products",
        element: (
          <>
            <Carousal></Carousal>
            <SecondPage></SecondPage>
            <Category></Category>
            <ProductNavbar></ProductNavbar>
            <Box mb={10}></Box>
          </>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <Private>
            <Dashboard></Dashboard>
          </Private>
        ),
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/addservice",
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "/singleservice/:id",
        element: <SingleService></SingleService>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/singleservice/${params.id}`),
      },
      // {
      //   path: "*",
      //   element: <Error></Error>,
      // },
    ],
  },
]);

export default router;
