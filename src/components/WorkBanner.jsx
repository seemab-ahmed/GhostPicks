import React from "react";
import { Link } from "react-router-dom";
import Tick from "../assets/images/check.svg";
import WorkBannerImg from "../assets/images/work-banner-img-new.png";
import EffectsImg from "../assets/images/effects.png";

const WorkBanner = () => {
  return (
    <section className="bg-cover bg-center pt-20 xl:pt-[120px] pb-10 relative">
      <img
        src={EffectsImg}
        alt="effect"
        className="absolute left-0 top-0 w-full h-auto -z-[1]"
      />
      <div className="container">
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h1 className="font-bangers text-4xl md:text-6xl xl:text-[90px] leading-none text-white font-normal uppercase mb-5 md:mb-8">
            How it works.. Simplified!
          </h1>
          <p className="text-base md:text-lg xl:text-xl leading-8 text-[rgba(255,255,255,0.8)] max-w-[540px] xl:max-w-full mx-auto font-normal mb-5 md:mb-7">
            Your picks.. Our funds... It’s that simple!
          </p>
          <div className="flex items-center justify-center gap-2.5 max-w-[480px] w-full mx-auto">
            <Link
              to="/"
              className="text-xs font-semibold text-saffronMango leading-none h-[46px] flex items-center justify-center gap-2.5 px-4 rounded-[50px] capitalize bg-saffronMango-radial-gradient border border-custom-transparent-saffron max-w-fit mb-8 mx-auto text-left"
            >
              <img src={Tick} alt="tick" className="w-4 h-4" />
              Stop Risking Your own Money
            </Link>
            <Link
              to="/"
              className="text-xs font-semibold text-saffronMango leading-none h-[46px] flex items-center justify-center gap-2.5 px-4 rounded-[50px] capitalize bg-saffronMango-radial-gradient border border-custom-transparent-saffron max-w-fit mb-8 mx-auto text-left"
            >
              <img src={Tick} alt="tick" className="w-4 h-4" />
              Bet Big for Life-Changing Income
            </Link>
          </div>
          <Link
            to=""
            className="max-w-[180px] xl:max-w-[248px] w-full mx-auto text-base font-semibold text-jaguar leading-none bg-custom-muddy-gradient border border-custom-transparent-muddy rounded-[50px] shadow-custom-white h-12 xl:h-[67px] flex items-center justify-center scale-100 transition-all hover:scale-110"
          >
            Start Challenge
          </Link>
        </div>
        <img
          src={WorkBannerImg}
          alt="workImg"
          className="mx-auto"
          data-aos="zoom-in"
          data-aos-duration="3000"
        />
      </div>
    </section>
  );
};

export default WorkBanner;
