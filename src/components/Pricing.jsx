import React, { useState } from "react";
import ExpressImg from "../assets/images/express.svg";
import Step2Img from "../assets/images/2-steps.svg";
import Step3Img from "../assets/images/3-steps.svg";
import { Link } from "react-router-dom";
import Tick from "../assets/images/check-circle.svg";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: "$1,000 Account" },
    { id: 2, label: "$5,000 Account" },
    { id: 3, label: "$10,000 Account" },
    { id: 4, label: "$25,000 Account", tag: "Most Popular" },
    { id: 5, label: "$50,000 Account" },
  ];

  const cardData = {
    1: [
      {
        thumbnail: ExpressImg,
        price: "$16",
        description: "Basic tools to get started",
        support: "Email support",
      },
      {
        thumbnail: Step2Img,
        price: "$32",
        description: "Enhanced tools",
        support: "Priority support",
      },
      {
        thumbnail: Step3Img,
        price: "$64",
        description: "All tools unlocked",
        support: "24/7 support",
      },
    ],
    2: [
      {
        thumbnail: ExpressImg,
        price: "$50",
        description: "Standard tools",
        support: "Email support",
      },
      {
        thumbnail: Step2Img,
        price: "$100",
        description: "Advanced tools",
        support: "Priority support",
      },
      {
        thumbnail: Step3Img,
        price: "$150",
        description: "Full access tools",
        support: "24/7 support",
      },
    ],
    3: [
      {
        thumbnail: ExpressImg,
        price: "$75",
        description: "Starter kit",
        support: "Email support",
      },
      {
        thumbnail: Step2Img,
        price: "$150",
        description: "Growth kit",
        support: "Priority support",
      },
      {
        thumbnail: Step3Img,
        price: "$225",
        description: "Pro kit",
        support: "24/7 support",
      },
    ],
    4: [
      {
        thumbnail: ExpressImg,
        price: "$100",
        description: "Starter plan",
        support: "Email support",
      },
      {
        thumbnail: Step2Img,
        price: "$200",
        description: "Professional plan",
        support: "Priority support",
      },
      {
        thumbnail: Step3Img,
        price: "$300",
        description: "Enterprise plan",
        support: "24/7 support",
      },
    ],
    5: [
      {
        thumbnail: ExpressImg,
        price: "$125",
        description: "Individual plan",
        support: "Email support",
      },
      {
        thumbnail: Step2Img,
        price: "$250",
        description: "Team plan",
        support: "Priority support",
      },
      {
        thumbnail: Step3Img,
        price: "$375",
        description: "Business plan",
        support: "24/7 support",
      },
    ],
  };

  return (
    <section className="py-10 xl:py-20">
      <div className="container">
        <div className="max-w-[593px] w-full mx-auto mb-10 xl:mb-[60px]">
          <h2 className="text-heading2 max-w-[440px] w-full mx-auto">
            The time is now, lets{" "}
            <span className="text-spearmint">get you funded</span>
          </h2>
          <p className="text-body mb-10">
            Accelerate your path to funding with clear, achievable goals. Use
            our capital to place your bets and{" "}
            <span className="text-spearmint">start winning today!</span>
          </p>
        </div>

        <div className="max-w-[1164px] w-full mx-auto">
          <div className="overflow-y-auto mb-6">
            <ul className="grid grid-cols-5 gap-5 max-w-[915px] pt-5 pb-2 min-w-[915px] w-full mx-auto">
              {tabs.map((tab) => (
                <li
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-sm font-semibold leading-none h-[58px] flex items-center justify-center px-4 rounded-[50px] capitalize border border-border-transparent-white cursor-pointer relative ${activeTab === tab.id
                      ? "bg-white-radial-gradient text-white"
                      : "bg-custom-transparent-jaguar text-starDust"
                    }`}
                >
                  {tab.label}
                  {tab.tag && (
                    <span className="absolute -top-2 right-5 text-[9px] font-semibold -tracking-[1%] text-black rounded-[50px] bg-spearmint px-1.5 py-0.5 uppercase max-w-fit">
                      {tab.tag}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="py-5 lg:p-5 text-white overflow-y-auto">
            <div className="grid grid-cols-3 gap-5 min-w-[915px] max-w-[915px] lg:max-w-full lg:min-w-full">
              {cardData[activeTab].map((card, index) => (
                <div
                  key={index}
                  className={`rounded-[20px] border p-5 xl:p-8 text-center shadow-custom-green relative ${activeTab === 4 && index === 1
                      ? "border-spearmint bg-custom-mix-two"
                      : "border-custom-transparent-mint-two bg-custom-mix"
                    }`}
                >
                  {activeTab === 4 && index === 1 && (
                    <span className="absolute -top-2 left-0 mx-auto right-0 text-[9px] font-semibold -tracking-[1%] text-black rounded-[50px] bg-spearmint px-1.5 py-0.5 uppercase max-w-fit">
                      Most Popular
                    </span>
                  )}
                  <figure className="mb-5 xl:mb-11">
                    <img src={card.thumbnail} alt="img" className="mx-auto" />
                  </figure>
                  <div className="text-3xl lg:text-4xl xl:text-5xl font-semibold leading-none text-white mb-8">
                    {card.price}
                    <span className="text-base font-normal leading-none text-[rgba(255,255,255,0.8)]">
                      {" "}
                      / One time fee
                    </span>
                  </div>
                  <Link
                    to="/"
                    className={`text-sm font-semibold leading-none h-10 lg:h-12 xl:h-[58px] flex items-center justify-center px-8 rounded-[50px] capitalize border mb-8 ${activeTab === 4 && index === 1
                        ? "bg-custom-mint text-jaguar"
                        : "bg-spearmint-radial-gradient text-spearmint border-custom-transparent-green"
                      }`}
                  >
                    get funded
                  </Link>
                  <h6 className="text-base leading-none font-medium text-white mb-2.5 text-left">
                    Rules
                  </h6>
                  <ul>
                    <li className="text-sm font-normal leading-none flex items-center gap-2 text-[rgba(255,255,255,0.8)] py-2.5">
                      <img src={Tick} alt="tick" className="relative z-[1]" />{" "}
                      {card.description}
                    </li>
                    <li className="text-sm font-normal leading-none flex items-center gap-2 text-[rgba(255,255,255,0.8)] py-2.5">
                      <img src={Tick} alt="tick" className="relative z-[1]" />{" "}
                      {card.support}
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
