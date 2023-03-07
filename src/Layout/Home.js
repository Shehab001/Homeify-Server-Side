import React from "react";
import SecondPage from "../Components/SecondPage/SecondPage";
import Carousal from "../Components/Carousal/Carousal";
import NewSeason from "../Components/NewSeason/NewSeason";
import StayHome from "../Components/StayHome/StayHome";
import Footer from "../Components/Footer/Footer";
import AboutUs from "../Components/AboutUs/AboutUs";
import OurTeam from "../Components/AboutUs/OurTeam";
import Company from "../Components/AboutUs/Company";
import Contact from "../Components/Contact.js/Contact";
import ProductNavbar from "../Components/Product/ProductNavbar";
import Cart from "../Components/Product/Category";
import Category from "../Components/Product/Category";

const Home = () => {
  return (
    <div>
      <Carousal></Carousal>
      <SecondPage></SecondPage>

      <Category></Category>
      <NewSeason></NewSeason>
      <StayHome></StayHome>
      <AboutUs></AboutUs>
      <OurTeam></OurTeam>

      <Contact></Contact>
      <Footer></Footer>
      {/* <Company></Company> */}
    </div>
  );
};

export default Home;
