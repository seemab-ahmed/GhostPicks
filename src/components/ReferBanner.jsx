import React from "react";
import { Link } from "react-router-dom";
// import Tick from "../assets/images/check-circle.svg";
import ReferBannerImg from "../assets/images/refer-banner-img.png";
import EffectsImg from "../assets/images/effects.png";

const ReferBanner = () => {
  return (
    <section className="pt-20 xl:pt[150px] pb-10 relative">
      <img
        src={EffectsImg}
        alt="effect"
        className="absolute left-0 top-0 w-full h-auto -z-[1]"
      />
      <div className="container">
        <div className="text-center">
          <h1 className="font-bangers text-4xl md:text-6xl xl:text-[90px] leading-none text-white font-normal uppercase mb-5 md:mb-8">
            Refer & Earn Big
          </h1>
          <p className="text-base md:text-lg xl:text-xl leading-8 text-[rgba(255,255,255,0.8)] mx-auto font-normal mb-5 md:mb-7">
            Get paid for sharing! Spread the word, bring others on board, and
            start earning rewards today!
          </p>
          <Link
            to=""
            className="max-w-[140px] w-full mx-auto text-base font-semibold text-jaguar leading-none bg-custom-mint border border-[rgba(200,255,206,0.7)] rounded-[50px] shadow-custom-white h-12 xl:h-[67px] flex items-center justify-center mb-8 md:mb-16 scale-100 transition-all hover:scale-110"
          >
            Log In
          </Link>
        </div>
        <img src={ReferBannerImg} alt="workImg" className="mx-auto" />
      </div>
    </section>
  );
};

export default ReferBanner;
