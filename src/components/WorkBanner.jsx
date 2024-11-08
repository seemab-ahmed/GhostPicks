import React from "react";
import { Link } from "react-router-dom";
import Tick from "../assets/images/check-circle.svg";
// import BannerBgImg from "../assets/images/home-banner-bg.png";
import WorkBannerImg from "../assets/images/work-banner-img.png";

const WorkBanner = () => {
  return (
    <section
      className="bg-cover bg-center py-10"
      //   style={{ backgroundImage: `url(${BannerBgImg})` }}
    >
      <div className="container">
        <div className="text-center">
          <h1 className="font-bangers text-[90px] leading-none text-white font-normal uppercase mb-8">
            How it works.. Simplified!
          </h1>
          <p className="text-xl leading-8 text-[rgba(255,255,255,0.8)] font-normal mb-10">
            Your picks.. Our funds... It’s that simple!
          </p>
          <div className="flex items-center justify-center gap-2.5 max-w-[480px] w-full mx-auto">
            <Link
              to="/"
              className="text-xs font-semibold text-spearmint leading-none h-[46px] flex items-center justify-center gap-2.5 px-4 rounded-[50px] capitalize bg-spearmint-radial-gradient border border-custom-transparent-green max-w-fit mb-8 mx-auto"
            >
              <img src={Tick} alt="tick" className="w-4 h-4" />
              Stop Risking Your own Money
            </Link>
            <Link
              to="/"
              className="text-xs font-semibold text-spearmint leading-none h-[46px] flex items-center justify-center gap-2.5 px-4 rounded-[50px] capitalize bg-spearmint-radial-gradient border border-custom-transparent-green max-w-fit mb-8 mx-auto"
            >
              <img src={Tick} alt="tick" className="w-4 h-4" />
              Bet Big for Life-Changing Income
            </Link>
          </div>
          <Link
            to=""
            className="max-w-[248px] w-full mx-auto text-base font-semibold text-jaguar leading-none bg-custom-mint border border-[rgba(200,255,206,0.7)] rounded-[50px] shadow-custom-white h-[67px] flex items-center justify-center mb-16"
          >
            Start Challenge
          </Link>
        </div>
        <img src={WorkBannerImg} alt="workImg" />
      </div>
    </section>
  );
};

export default WorkBanner;
