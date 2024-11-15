import React from "react";
import EffectsImg from "../assets/images/effects.png";

const LegalBanner = () => {
  return (
    <section className="bg-cover bg-center pb-20 pt-16 xl:pt-[200px] xl:pb-[265px] relative">
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
          <h1 className="font-bangers text-4xl md:text-6xl xl:text-[90px] leading-none text-white font-normal uppercase">
            Cookie policy
          </h1>
        </div>
      </div>
    </section>
  );
};

export default LegalBanner;
