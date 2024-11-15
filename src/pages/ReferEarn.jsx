import React from "react";
import ReferBanner from "../components/ReferBanner";
import HowItWorks from "../components/HowItWorks";
import Funded from "../components/Funded";
import Milestones from "../components/Milestones";
import GetStarted from "../components/GetStarted";
import JoinUs from "../components/JoinUs";

const ReferEarn = () => {
  return (
    <main>
      <ReferBanner />
      <HowItWorks />
      <Funded account={false} profit={false} referrals={true}/>
      <Milestones />
      <GetStarted />
      <JoinUs />
    </main>
  );
};

export default ReferEarn;
