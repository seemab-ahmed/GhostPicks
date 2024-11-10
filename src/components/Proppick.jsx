import React, { useState } from "react";
import Tick from "../assets/images/check-circle.svg";
import PlayerImg from "../assets/images/prop-col-img.png";
import AgoraImg from "../assets/images/agora.png";

const Proppick = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Phase 1", content: "Content for Phase 1" },
    { label: "Phase 2", content: "Content for Phase 2" },
    { label: "Cash Rewards", content: "Content for Cash Rewards" },
  ];
  return (
    <section className="pb-10 xl:pb-20">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-5 max-w-[540px] lg:max-w-full mx-auto items-end">
          <div
            className="max-w-[815px] w-full pt-32 xl:pt-[240px] lg:p-10 relative"
            data-aos="fade-right"
            data-aos-duration="2500"
          >
            <h2 className="text-heading2 max-w-[593px] w-full text-left">
              How to get a Proppicks bankroll
            </h2>
            <p className="text-body mb-5 xl:mb-10 max-w-[593px] w-full text-left">
              Unlock the game with confidence, bet on sports using our funds and
              keep 50% of the winnings. Play smart, we’ve got your back!
            </p>
            <ul className="relative before:content-[''] before:absolute before:left-2.5 lg:before:left-4 before:top-0 before:w-[1px] before:h-full before:bg-[#16651E] before:-z-[1] before:opacity-50">
              <li className="text-xs lg:text-sm xl:text-base font-semibold leading-none flex items-center gap-2 text-white mb-8 xl:mb-12">
                <img
                  src={Tick}
                  alt="tick"
                  className="w-5 lg:w-auto relative z-[1]"
                />{" "}
                Make 33%
              </li>
              <li className="text-xs lg:text-sm xl:text-base font-semibold leading-none flex items-center gap-2 text-white mb-8 xl:mb-12">
                <img
                  src={Tick}
                  alt="tick"
                  className="w-5 lg:w-auto relative z-[1]"
                />{" "}
                Don’t lose 15% in a day
              </li>
              <li className="text-xs lg:text-sm xl:text-base font-semibold leading-none flex items-center gap-2 text-white">
                <img
                  src={Tick}
                  alt="tick"
                  className="w-5 lg:w-auto relative z-[1]"
                />{" "}
                Don’t lose 20% in total
              </li>
            </ul>
            <img
              src={PlayerImg}
              alt="player"
              className="absolute right-0 top-0 -z-[1] max-w-[180px] lg:max-w-[220px] xl:max-w-[448px] w-full"
            />
          </div>
          <div
            className="max-w-[684px] w-full"
            data-aos="fade-left"
            data-aos-duration="2500"
          >
            <img src={AgoraImg} alt="agora-img" className="mx-auto" />
            <div className="rounded-[40px] bg-custom-green p-4 md:p-6 xl:p-10 -mt-16 relative border border-border-transparent-white">
              <div className="rounded-[20px] p-3 md:p-5 xl:p-[30px] bg-custom-black">
                <ul className="grid grid-cols-3 gap-2.5 mb-5 xl:mb-8 bg-[#0C0D0B] p-1 rounded-[50px]">
                  {tabs.map((tab, index) => (
                    <li
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`text-xs xl:text-sm font-semibold text-spearmint leading-none h-10 md:h-12 xl:h-[58px] flex items-center justify-center md:px-2 rounded-[50px] capitalize cursor-pointer border border-custom-transparent-green ${
                        activeTab === index
                          ? "bg-spearmint-radial-gradient"
                          : "bg-transparent text-white border-none"
                      }`}
                    >
                      {tab.label}
                    </li>
                  ))}
                </ul>

                {/* <div className="p-5 text-white">{tabs[activeTab].content}</div> */}
                <div className="border border-[rgba(255,255,255,0.1)] bg-[#020B03] rounded-xl p-5">
                  <div className="mb-5">
                    <div class="flex justify-between items-center mb-4">
                      <span class="text-sm font-medium text-white">
                        Profit Target
                      </span>
                      <span class="text-sm font-medium border border-[rgba(255,255,255,0.1)] h-9 px-5 flex items-center justify-center max-w-fit text-spearmint rounded-[50px] bg-custom-transparent-green">
                        33%
                      </span>
                    </div>
                    <div class="w-full bg-custom-transparent-black border border-[rgba(255,255,255,0.01)] rounded-full h-5 xl:h-[30px] shadow-custom-white-four">
                      <div class="border-[0.5px] border-white bg-custom-mint-two h-5 xl:h-[30px] rounded-full w-1/3"></div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <div class="flex justify-between items-center mb-4">
                      <span class="text-sm font-medium text-white">
                        Daily Loss
                      </span>
                      <span class="text-sm font-medium border border-[rgba(255,255,255,0.1)] h-9 px-5 flex items-center justify-center max-w-fit text-tomato rounded-[50px] bg-custom-transparent-tomato">
                        15%
                      </span>
                    </div>
                    <div class="w-full bg-custom-transparent-black border border-[rgba(255,255,255,0.01)] rounded-full h-5 xl:h-[30px] shadow-custom-white-four">
                      <div class="border-[0.5px] border-white bg-custom-tomato h-5 xl:h-[30px] rounded-full w-1/6"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between items-center mb-4">
                      <span class="text-sm font-medium text-white">
                        Max Loss
                      </span>
                      <span class="text-sm font-medium border border-[rgba(255,255,255,0.1)] h-9 px-5 flex items-center justify-center max-w-fit text-beanRed rounded-[50px] bg-custom-transparent-beanRed">
                        20%
                      </span>
                    </div>
                    <div class="w-full bg-custom-transparent-black border border-[rgba(255,255,255,0.01)] rounded-full h-5 xl:h-[30px] shadow-custom-white-four">
                      <div class="border-[0.5px] border-white bg-custom-beanRed h-5 xl:h-[30px] rounded-full w-1/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proppick;
