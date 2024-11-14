import React from "react";
import { Link } from "react-router-dom";

const ChallengeOption = () => {
  return (
    <section className="pt-10 xl:pt-20 pb-20 xl:pb-40 text-left">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          <div
            className="lg:col-span-5"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h2 className="text-heading2">Challenge Options</h2>
            <p className="text-body">
              Unlock the game with confidence, bet on sports using our funds and
              keep 50% of the winnings. Play smart, we’ve got your back!
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div
              className="p-5 xl:p-8 rounded-[20px] bg-[#070702] border border-[rgba(242,198,84,0.10)] shadow-custom-mango-two"
              data-aos="zoom-in"
              data-aos-duration="2500"
            >
              <h5 className="text-lg lg:text-xl xl:text-2xl font-medium text-white leading-none mb-5">
                2 Step Challenge
              </h5>
              <p className="text-sm leading-5s lg:leading-8 text-[rgba(255,255,255,0.8)] mb-5 lg:mb-10 xl:mb-16">
                Take on our 2-step challenge to showcase your sports knowledge,
                secure funding, and keep up to 80% of the profits!
              </p>
              <Link
                to="/"
                className="text-sm font-semibold text-saffronMango leading-none h-10 lg:h-12 xl:h-[58px] flex items-center justify-center px-8 rounded-[50px] capitalize bg-saffronMango-radial-gradient border border-custom-transparent-saffron"
              >
                Start challenge
              </Link>
            </div>
            <div
              className="p-5 xl:p-8 rounded-[20px] bg-[#070702] border border-[rgba(242,198,84,0.10)] shadow-custom-mango-two"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <h5 className="text-lg lg:text-xl xl:text-2xl font-medium text-white leading-none mb-5">
                3 Step Challenge
              </h5>
              <p className="text-sm leading-5s lg:leading-8 text-[rgba(255,255,255,0.8)] mb-5 lg:mb-10 xl:mb-16">
                Join our 3-step challenge at an even better price to prove your
                sports expertise, earn funding, and keep up to 80% of the
                profits!
              </p>
              <Link
                to="/"
                className="text-sm font-semibold text-saffronMango leading-none h-10 lg:h-12 xl:h-[58px] flex items-center justify-center px-8 rounded-[50px] capitalize bg-saffronMango-radial-gradient border border-custom-transparent-saffron"
              >
                Start challenge
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeOption;
