import React from "react";
import referralsIcon1 from "../assets/images/10referrals-new.svg";
import referralsIcon2 from "../assets/images/50referrals-new.svg";
import referralsIcon3 from "../assets/images/500referrals-new.svg";
import { Link } from "react-router-dom";

const Milestones = () => {
  const referrals = [
    {
      thumbnail: referralsIcon1,
      title: "10 Referrals",
      para: "Get a $50 Bonus on top of your commissions",
      bgColor: "#ED9410",
    },
    {
      thumbnail: referralsIcon2,
      title: "50 Referrals",
      para: "Get a $50 Bonus on top of your commissions",
      bgColor: "#C5872B",
    },
    {
      thumbnail: referralsIcon3,
      title: "500 Referrals",
      para: "Get a $50 Bonus on top of your commissions",
      bgColor: "#AD7E38",
    },
  ];
  return (
    <section className="py-10 xl:py-20">
      <div className="container">
        <div
          className="mb-10 xl:mb-[60px] max-w-[735px] w-full mx-auto text-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2 className="text-heading2">Receive Bonuses for Milestones</h2>
          <p className="text-body">
            Hit milestones and receive exclusive bonuses! Celebrate each
            achievement with rewards that grow as you do. Start reaching your
            goals today!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
          {referrals.map((item) => (
            <div
              className="py-5 xl:py-[60px] px-5 xl:px-8 rounded-[20px] border-[4px] border-white text-center"
              style={{ background: item.bgColor }}
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <figure className="mb-5 xl:mb-8">
                <img src={item.thumbnail} alt="icon" className="mx-auto" />
              </figure>
              <h4 className="text-lg lg:text-2xl xl:text-[32px] text-white font-semibold leading-none mb-5 xl:mb-8">
                {item.title}
              </h4>
              <p className="text-sm lg:text-base xl:text-lg font-normal leading-none text-white">
                {item.para}
              </p>
            </div>
          ))}
        </div>
        <Link
          to=""
          className="max-w-[140px] w-full mx-auto text-base font-semibold text-jaguar leading-none bg-custom-muddy-gradient border border-custom-transparent-muddy rounded-[50px] h-12 xl:h-[67px] flex items-center justify-center scale-100 transition-all hover:scale-110"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          Sign up
        </Link>
      </div>
    </section>
  );
};

export default Milestones;
