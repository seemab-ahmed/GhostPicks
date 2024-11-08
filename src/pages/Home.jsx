import React from "react";
import Banner from "../components/Banner";
import ChallengeOption from "../components/ChallengeOption";
import Pricing from "../components/Pricing";
import Proppick from "../components/Proppick";
import RealTime from "../components/RealTime";
import Entertainment from "../components/Entertainment";
import AllSports from "../components/AllSports";
import JoinUs from "../components/JoinUs";

const Home = () => {
  return (
    <main>
      <Banner />
      <Proppick />
      <Pricing />
      <ChallengeOption />
      <Entertainment />
      <RealTime />
      <AllSports />
      <JoinUs />
    </main>
  );
};

export default Home;
