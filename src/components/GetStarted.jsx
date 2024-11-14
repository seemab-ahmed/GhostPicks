import React from "react";
import EffectsImg from "../assets/images/effects.png";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <section className="py-10 xl:py-20">
      <div className="relative text-center py-10 xl:py-[133px]">
        <div
          className="absolute top-0 left w-full h-[1px]"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #F2C654 0%, rgba(242, 198, 84, 0.00) 100%)",
          }}
        ></div>
        <img
          src={EffectsImg}
          alt="effect"
          className="absolute left-0 top-0 w-full h-auto -z-[1]"
        />
        <div className="container">
          <div
            className="max-w-[1280px] w-full mx-auto"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <div className="mb-10 xl:mb-[60px] max-w-[871px] w-full mx-auto">
              <Link
                to="/"
                className="text-xs md:text-sm font-semibold text-saffronMango leading-none h-[37px] flex items-center justify-center px-5 md:px-8 rounded-[50px] capitalize bg-saffronMango-radial-gradient border border-custom-transparent-saffron max-w-fit mb-5 md:mb-8 mx-auto scale-100 transition-all hover:scale-110"
              >
                become a pro affiliate
              </Link>
              <h2 className="text-heading2">Help grow the family</h2>
              <p className="text-body mb-10">
                Become a Pro Affiliate! Unlock exclusive perks, earn top
                commissions, and turn your influence into steady income. Start
                building your affiliate success today!
              </p>
              <Link
                to=""
                className="max-w-[180px]  w-full mx-auto text-base font-semibold text-jaguar leading-none bg-custom-muddy-gradient border border-custom-transparent-muddy rounded-[50px] h-12 xl:h-[67px] flex items-center justify-center mb-8 md:mb-16 scale-100 transition-all hover:scale-110"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
