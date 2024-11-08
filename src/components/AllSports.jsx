import React from "react";
import Card1Img from "../assets/images/card1.png";
import Card2Img from "../assets/images/card2.png";
import Card3Img from "../assets/images/card3.png";
import Card4Img from "../assets/images/card4.png";
import FootballImg from "../assets/images/football.png";
import basketballImg from "../assets/images/basketball.png";
import HelmetImg from "../assets/images/helmet.png";
import VollyballImg from "../assets/images/vollyball.png";
import BarImg from "../assets/images/white-bar.svg";
import SportsBgImg from "../assets/images/all-sports-bg.png";
import { Link } from "react-router-dom";

const AllSports = () => {
  const sportData = [
    {
      bgImg: Card1Img,
      thumbnail: FootballImg,
      name: "soccer",
      description: "Worldwide Soccer Picks",
      btnTitle: "over 100+ games",
    },
    {
      bgImg: Card2Img,
      thumbnail: basketballImg,
      name: "Basketball",
      description: "Worldwide basketball Picks",
      btnTitle: "over 50+ games",
    },
    {
      bgImg: Card3Img,
      thumbnail: VollyballImg,
      name: "Football",
      description: "Worldwide football Picks",
      btnTitle: "over 30+ games",
    },
    {
      bgImg: Card4Img,
      thumbnail: HelmetImg,
      name: "much more",
      description: "anything you want",
      btnTitle: "over 500+ games",
    },
  ];
  return (
    <section
      className="py-20 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${SportsBgImg})` }}
    >
      <div className="container">
        <div className="mb-[60px]">
          <h2 className="text-[60px] font-bangers leading-none text-white mb-8">
            Everything you could want!
          </h2>
          <p className="text-base leading-8 text-[rgba(255,255,255,0.8)]">
            Place your picks on anything you desire in the world of sports!
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {sportData.map((item) => (
            <div
              className="bg-contain bg-no-repeat bg-center text-center px-8 pb-11"
              style={{ backgroundImage: `url(${item.bgImg})` }}
            >
              <figure className="min-h-[289px]">
                <img
                  src={item.thumbnail}
                  alt="sports"
                  className="mx-auto -mt-10 object-contain flex justify-center items-center"
                />
              </figure>
              <h3 className="text-[40px] font-bangers text-white leading-none">
                {item.name}
              </h3>
              <img src={BarImg} alt="barImg" className="my-4 mx-auto" />
              <span className="text-sm font-normal font-bangers text-white mb-6 block">
                {item.description}
              </span>
              <Link className="border border-custom-transparent-green h-[58px] rounded-[50px] text-sm font-semibold leading-none flex items-center justify-center bg-white">
                {item.btnTitle}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllSports;
