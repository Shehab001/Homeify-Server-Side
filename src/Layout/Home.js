import React from "react";
import SecondPage from "../Components/SecondPage/SecondPage";
import Carousal from "../Components/Carousal/Carousal";
import NewSeason from "../Components/NewSeason/NewSeason";
import StayHome from "../Components/StayHome/StayHome";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Carousal></Carousal>
      <SecondPage></SecondPage>
      <NewSeason></NewSeason>
      <StayHome></StayHome>
      <Footer></Footer>
    </div>
  );
};

export default Home;
