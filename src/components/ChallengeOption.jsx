import React from "react";
import { Link } from "react-router-dom";

const ChallengeOption = () => {
  return (
    <section className="pt-20 pb-40 text-left">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-5">
            <h2 className="text-[60px] font-bangers leading-none text-white mb-8">
              Challenge Options
            </h2>
            <p className="text-base leading-8 text-[rgba(255,255,255,0.8)]">
              Unlock the game with confidence, bet on sports using our funds and
              keep 50% of the winnings. Play smart, we’ve got your back!
            </p>
          </div>
          <div className="col-span-7 grid grid-cols-2 gap-5">
            <div className="p-8 rounded-[20px] bg-custom-mix border border-custom-transparent-green shadow-custom-green">
              <h5 className="text-2xl font-medium text-white leading-none mb-5">
                2 Step Challenge
              </h5>
              <p className="text-sm leading-8 text-[rgba(255,255,255,0.8)] mb-16">
                Take on our 2-step challenge to showcase your sports knowledge,
                secure funding, and keep up to 80% of the profits!
              </p>
              <Link
                to="/"
                className="text-sm font-semibold text-spearmint leading-none h-[58px] flex items-center justify-center px-8 rounded-[50px] capitalize bg-spearmint-radial-gradient border border-custom-transparent-green"
              >
                get funded
              </Link>
            </div>
            <div className="p-8 rounded-[20px] bg-custom-mix border border-custom-transparent-green shadow-custom-green">
              <h5 className="text-2xl font-medium text-white leading-none mb-5">
                3 Step Challenge
              </h5>
              <p className="text-sm leading-8 text-[rgba(255,255,255,0.8)] mb-16">
                Join our 3-step challenge at an even better price to prove your
                sports expertise, earn funding, and keep up to 80% of the
                profits!
              </p>
              <Link
                to="/"
                className="text-sm font-semibold text-spearmint leading-none h-[58px] flex items-center justify-center px-8 rounded-[50px] capitalize bg-spearmint-radial-gradient border border-custom-transparent-green"
              >
                get funded
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeOption;
