import React from "react";
import HowItWorks from "../components/HowItWorks";
import WorkBanner from "../components/WorkBanner";
import Funded from "../components/Funded";
import Reviews from "../components/Reviews";
import JoinUs from "../components/JoinUs";

const Work = () => {
  return (
    <main>
      <WorkBanner />
      <HowItWorks />
      <Funded account={true} profit={true} referrals={false} />
      <Reviews />
      <JoinUs />
    </main>
  );
};

export default Work;
