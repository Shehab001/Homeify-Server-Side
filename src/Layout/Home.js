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

const Home = () => {
  return (
    <div>
      <Carousal></Carousal>
      <SecondPage></SecondPage>
      <NewSeason></NewSeason>
      <StayHome></StayHome>
      <AboutUs></AboutUs>
      <OurTeam></OurTeam>
      {/* <Company></Company> */}
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
