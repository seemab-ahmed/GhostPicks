import React from "react";
import PuzzleImg from "../assets/images/puzzle-icon.svg";
import GraphImg from "../assets/images/graph-icon.svg";
import MoneyImg from "../assets/images/money-icon.svg";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const challangeSteps = [
    {
      icon: PuzzleImg,
      steps: "Step 01",
      subtitle: "Prove your Skill",
      title: "Take a Challenge",
      description:
        "Select the amount of capital you want to trade with and submit your order to join our trading challenge. You'll need to complete the trading objectives displayed on your dashboard, which can be achieved in one, two, or three phases!",
    },
    {
      icon: GraphImg,
      steps: "Step 02",
      subtitle: "Funded Sports up to $100k",
      title: "Unlock Capital",
      description:
        "we believe in empowering our traders to reach their full potential. That's why we offer you the chance to unlock your capital and maximize your trading opportunities. Join us today and discover how you can access additional funds to enhance your trading strategies.",
    },
    {
      icon: MoneyImg,
      steps: "Step 03",
      subtitle: "Up to 50% of the Profits",
      title: "Pick & Get Paid",
      description:
        "We make it easy for you to turn your insights into income. Simply pick your favorite sports bets, and when you win, you get paid! Our user-friendly platform empowers you to make informed decisions while maximizing your earning potential.",
    },
  ];
  return (
    <section className="-mt-20 pb-20 relative">
      <div className="container">
        <div
          className="mb-10 xl:mb-[60px] text-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2 className="text-heading2">How It Works</h2>
          <p className="text-body">
            Your Skills with Our Risk. You're not liable for any losses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {challangeSteps.map((item) => (
            <div
              className="bg-custom-gordons-green-gradient shadow-custom-gorden p-5 xl:p-8 border border-transparent rounded-[20px] text-left transition-all hover:border-spearmint hover:bg-custom-mix-two cursor-pointer"
              data-aos="zoom-in"
              data-aos-duration="2500"
            >
              <div className="flex items-center justify-between gap-5 mb-8 xl:mb-12">
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-10 xl:w-[60px] h-[10] xl:h-[60px]"
                />
                <span className="text-xs xl:text-sm font-medium text-white leading-none w-[68px] h-8 xl:h-[38px] flex items-center justify-center rounded bg-custom-transparent-white border border-[rgba(71,251,92,0.10)]">
                  {item.steps}
                </span>
              </div>
              <span className="text-xs font-medium text-white leading-none px-5 h-8 flex items-center justify-center max-w-fit bg-[#0B200D] border border-custom-transparent-white shadow-custom-green-two mb-5 rounded-[50px]">
                {item.subtitle}
              </span>
              <h5 className="text-lg lg:text-xl xl:text-2xl text-white font-semibold leading-none mb-5 xl:mb-7">
                {item.title}
              </h5>
              <p className="text-sm text-white leading-8 font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <Link
          to=""
          className="max-w-[175px] w-full mx-auto text-base font-semibold text-jaguar leading-none bg-custom-mint border border-custom-transparent-green rounded-[50px] shadow-custom-white h-12 xl:h-[58px] flex items-center justify-center scale-100 transition-all hover:scale-110"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          Start Challenge
        </Link>
      </div>
    </section>
  );
};

export default HowItWorks;
