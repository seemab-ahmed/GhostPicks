import React from "react";
import EffectsImg from "../assets/images/effects.png";
import EuroSportImg from "../assets/images/eurosport.svg";
import EspnImg from "../assets/images/espn.svg";
import SkySportsImg from "../assets/images/sky-sports.svg";
import CbsSportsImg from "../assets/images/cbs-sports.svg";

const Entertainment = () => {
  return (
    <section className="py-10 xl:py-20 relative text-center">
      <div className="absolute top-0 left w-full h-[1px] bg-custom-mix-three"></div>
      <img
        src={EffectsImg}
        alt="effect"
        className="absolute left-0 top-0 w-full h-auto -z-[1]"
      />
      <div className="container">
        <div className="max-w-[1280px] w-full mx-auto">
          <div
            className="mb-10 xl:mb-[60px]"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h2 className="text-heading2 max-w-[622px] w-full mx-auto">
              Unleash The Thrill Of Sports Entertainment
            </h2>
            <p className="text-body">
              Feel the adrenaline of sports entertainment, where every match
              ignites passion, and every bet elevates the game!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10 lg:mb-[60px]">
            <div
              className="p-5 lg:p-8 rounded-[20px] bg-custom-mix border border-custom-transparent-green shadow-custom-green transition-all hover:bg-custom-mint text-white hover:text-black cursor-pointer"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              {/* scale-100 hover:scale-105 */}
              <h4 className="text-2xl lg:text-[32px] font-bold leading-none mb-2.5">
                195+
              </h4>
              <span className="text-sm font-normal leading-none opacity-80">
                Countries Covered
              </span>
            </div>
            <div
              className="p-5 lg:p-8 rounded-[20px] bg-custom-mix border border-custom-transparent-green shadow-custom-green transition-all hover:bg-custom-mint text-white hover:text-black cursor-pointer"
              data-aos="zoom-in"
              data-aos-duration="2500"
            >
              {/* scale-100 hover:scale-105 */}
              <h4 className="text-2xl lg:text-[32px] font-bold leading-none mb-2.5">
                24/7
              </h4>
              <span className="text-sm font-normal leading-none opacity-80">
                Coverage
              </span>
            </div>
            <div
              className="p-5 lg:p-8 rounded-[20px] bg-custom-mix border border-custom-transparent-green shadow-custom-green transition-all hover:bg-custom-mint text-white hover:text-black cursor-pointer"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              {/* scale-100 hover:scale-105 */}
              <h4 className="text-2xl lg:text-[32px] font-bold leading-none mb-2.5">
                1000+
              </h4>
              <span className="text-sm font-normal leading-none opacity-80">
                Teams
              </span>
            </div>
          </div>
          <div
            className="max-w-[932px] w-full mx-auto"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h5 className="text-xl lg:text-2xl font-medium text-[rgba(255,255,255,0.8)] leading-none mb-8">
              Real Time Sports Data
            </h5>
            <div className="grid grid-cols-4 gap-5 lg:gap-10">
              <img src={EuroSportImg} alt="euro-sport" />
              <img src={EspnImg} alt="espn" />
              <img src={SkySportsImg} alt="sky-sports" />
              <img src={CbsSportsImg} alt="cbs-sports" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Entertainment;
