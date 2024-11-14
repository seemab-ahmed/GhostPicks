import React from "react";
import Sport1Img from "../assets/images/sport1.png";
import Sport2Img from "../assets/images/sport2.png";
import Sport3Img from "../assets/images/sport3.png";
import Sport4Img from "../assets/images/sport4.png";

const sports = [
  {
    thumbnail: Sport1Img,
    date: "November 15, 2024",
    description:
      "Bridegrooms and Bums: How the Dodgers went from Brooklyn’s darling to Los Angeles’ colossus",
  },
  {
    thumbnail: Sport2Img,
    date: "January 4, 2024",
    description:
      "NBA roundup: Kevin Durant and the Phoenix Suns spoil opening night at the LA Clippers’ new home with tense",
    tag: "most popular",
  },
  {
    thumbnail: Sport3Img,
    date: "September 24, 2024",
    description: "Five things to watch out for in Week 8 of the NFL season",
  },
  {
    thumbnail: Sport4Img,
    date: "October 4, 2024",
    description:
      "Erling Haaland leaves people ‘speechless’ with stunning acrobatic goal in Champions League",
  },
];
const RealTime = () => {
  return (
    <section className="py-10 xl:py-20">
      <div className="container">
        <div
          className="mb-10 lg:mb-[60px] text-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2 className="text-heading2">Real Time sports coverage</h2>
          <p className="text-body max-w-[675px] w-full mx-auto">
            Unlock the game with confidence, bet on sports using our funds and
            keep 50% of the winnings. Play smart, we’ve got your back!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[1226px] w-full mx-auto">
          {sports.map((item) => (
            <div
              className="py-8 px-5 xl:p-8 rounded-[20px] bg-[#070702] border border-[rgba(242,198,84,0.10)] shadow-custom-mango-two relative"
              data-aos="zoom-in"
              data-aos-duration="2500"
            >
              {item.tag && (
                <span className="text-xs lg:text-sm font-medium -tracking-[1%] text-black rounded-[50px] bg-saffronMango px-2.5 py-1 uppercase absolute -top-2.5 right-8 opacity-1">
                  {item.tag}
                </span>
              )}
              <img
                src={item.thumbnail}
                alt="sports"
                className="w-full rounded-[20px] object-cover overflow-hidden"
              />
              <span className="border border-custom-transparent-white bg-[#1B1E1B] px-5 flex items-center justify-center max-w-fit text-xs lg:text-sm font-medium leading-none text-[rgba(255,255,255,0.8)] h-8 lg:h-11 rounded-[50px] mt-5 mb-2.5 shadow-custom-grey">
                {item.date}
              </span>
              <p className="text-base lg:text-lg xl:text-xl font-medium text-white leading-7 text-left">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealTime;
