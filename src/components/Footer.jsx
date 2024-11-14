import React from "react";
import Instagram from "../assets/images/instagram.svg";
import Discord from "../assets/images/discord.svg";
import Twitter from "../assets/images/twitter.svg";
import { Link } from "react-router-dom";

const socialList = [
  {
    title: "Discord Community",
    icon: Discord,
    path: "/",
  },
  {
    title: "Instagram",
    icon: Instagram,
    path: "/",
  },
  {
    title: "X (Twitter)",
    icon: Twitter,
    path: "/",
  },
];

const footerNavLinks = [
  { name: "Terms & Conditions", path: "/" },
  { name: "Privacy Policy", path: "/" },
  { name: "Refund Policy", path: "/" },
  { name: "Affiliates", path: "/" },
  { name: "FAQ", path: "/" },
  { name: "Sports Picker Assessment", path: "/" },
];

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container">
        <div
          className="border border-custom-transparent-white rounded-[20px]"
          style={{
            background:
              "radial-gradient(74.09% 74.09% at 50% 0%, rgba(52, 250, 72, 0.04) 0%, rgba(52, 250, 72, 0.00) 100%), #F2C654",
          }}
        >
          <div className="p-5 lg:p-8 xl:p-10">
            <div className="p-4 md:p-8 bg-jaguar rounded-[20px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-5 mb-10">
              <div className="xl:col-span-7">
                <span className="text-sm font-normal leading-none text-[rgba(255,255,255,0.8)] mb-2.5">
                  Stay up to date
                </span>
                <h5 className="text-2xl font-bold leading-none text-white">
                  Our Newsletter
                </h5>
              </div>
              <form className="xl:col-span-5 h-12 md:h-[68px] bg-[#161616] border border-custom-transparent-saffron rounded-[50px] p-1 flex items-center">
                <input
                  type="email"
                  placeholder="Email"
                  className="h-full bg-transparent border-none rounded-none outline-none px-5 text-sm font-semibold text-white placeholder:text-white max-w-[364px] w-full"
                />
                <button
                  type="submit"
                  className="max-w-[264px] w-full flex items-center justify-center border border-custom-transparent-saffron text-saffronMango h-full rounded-[50px] bg-saffronMango-radial-gradient"
                >
                  Submit
                </button>
              </form>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {socialList.map((item, index) => (
                <li key={index}>
                  <Link
                    className="p-5 rounded-[20px] text-lg font-medium leading-none text-jaguar shadow-custom-saffron border border-border-transparent-white flex items-center justify-between gap-5 bg-[rgba(2,2,2,0.10)]"
                    to={item.path}
                  >
                    {item.title}
                    <span>
                      <img
                        src={item.icon}
                        alt={item.title}
                        className="w-10 xl:w-16 h-10 xl:h-16"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="max-w-[707px] w-full mx-auto text-center">
              <h5 className="text-base leading-none font-semibold text-[rgba(2,2,1,0.8)] mb-7">
                Important Links
              </h5>
              <ul className="flex items-center flex-wrap justify-center gap-5 xl:gap-8">
                {footerNavLinks.map((link) => (
                  <li>
                    <Link
                      to={link.path}
                      className="text-sm font-medium leading-none text-jaguar"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-[1px] max-w-[574px] w-full bg-[rgba(2,2,1,0.1)] my-5 xl:my-10 mx-auto"></div>
            <p className="text-xs text-[rgba(2,2,1,0.8)] leading-7 max-w-[1300px] text-center w-full mx-auto">
              WagerKingz is not a casino, sportsbook, or gambling operator, nor
              does it accept or place any type of wager in any capacity.
              Furthermore, WagerKingz does not promote or support illegal
              gambling in any form. All services and information provided by
              WagerKingz are strictly for educational and entertainment
              purposes. No real money is wagered on our platform; instead,
              participants use virtual "profit points" to demonstrate
              theoretical results based on actual live sports odds from
              reputable operators.
            </p>
          </div>
          <div className="p-5 text-center">
            <p className="text-sm font-normal leading-none text-jaguar">
              © 2024 WagerKingz. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
