import React from "react";
import { Link } from "react-router-dom";
import ChartImg from "../assets/images/banner_img_new.svg";
import ManImg from "../assets/images/man-img-new.png";
import EffectsImg from "../assets/images/effects.png";

const Banner = () => {
  return (
    <section className="banner py-5 md:py-10 relative overflow-hidden">
      <img
        src={EffectsImg}
        alt="effect"
        className="absolute left-0 top-0 w-full h-auto -z-[1]"
      />
      <img
        src={ManImg}
        alt="man"
        className="absolute bottom-0 w-full max-w-[278px] md:max-w-[380px] xl:max-w-[478px] h-full max-h-[360px] md:max-h-[680px] xl:max-h-[993px] object-contain -right-[80px] z-[1]"
        data-aos="fade-left"
        data-aos-duration="4000"
      />
      <div className="container">
        <div
          className="max-w-[814px] w-full mx-auto text-center relative z-[2]"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <Link
            to="/"
            className="text-xs md:text-sm font-semibold text-saffronMango leading-none h-[37px] flex items-center justify-center px-5 md:px-8 rounded-[50px] capitalize bg-saffronMango-radial-gradient border border-custom-transparent-saffron max-w-fit mb-5 md:mb-8 mx-auto scale-100 transition-all hover:scale-110"
          >
            Our Risk, Your Bets
          </Link>
          <h1 className="font-bangers text-4xl md:text-6xl xl:text-[90px] leading-none text-white font-normal uppercase mb-5 md:mb-8">
            Bet sports <br /> with{" "}
            <span className="text-saffronMango">Kingz funds!</span>
          </h1>
          <p className="text-base md:text-lg xl:text-xl leading-8 text-[rgba(255,255,255,0.8)] max-w-[540px] xl:max-w-full mx-auto font-normal mb-5 md:mb-10">
            Join the elite with Kingz Funds – where you can place sports bets
            using our capital and aim for royal rewards!
          </p>
          <Link
            to=""
            className="max-w-[180px] xl:max-w-[248px] w-full mx-auto text-base font-semibold text-jaguar leading-none bg-custom-muddy-gradient border border-custom-transparent-muddy rounded-[50px] h-12 xl:h-[67px] flex items-center justify-center mb-8 md:mb-16 scale-100 transition-all hover:scale-110"
          >
            Get Funded
          </Link>
        </div>
        <img
          src={ChartImg}
          alt="chartImg"
          className="max-w-[767px] xl:max-w-[1200px] w-full mx-auto"
          data-aos="zoom-in"
          data-aos-duration="3500"
        />
      </div>
    </section>
  );
};

export default Banner;
