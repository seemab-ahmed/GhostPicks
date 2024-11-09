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
      className="py-10 xl:py-20 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${SportsBgImg})` }}
    >
      <div className="container">
        <div className="mb-10 xl:mb-[60px]">
          <h2 className="text-heading2">
            Everything you could want!
          </h2>
          <p className="text-body">
            Place your picks on anything you desire in the world of sports!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5 max-w-[260px] sm:max-w-[550px] w-full lg:max-w-full lg:w-auto mx-auto">
          {sportData.map((item) => (
            <div
              className="bg-contain bg-no-repeat bg-bottom text-center px-4 4xl:px-8 pb-8 3xl:pb-11 sports-card"
              style={{ backgroundImage: `url(${item.bgImg})` }}
            >
              <figure className="min-h-[150px] xl:min-h-[180px] 3xl:min-h-[220px] 4xl:min-h-[289px] relative flex justify-center items-center">
                <img
                  src={item.thumbnail}
                  alt="sports"
                  className="-mt-10 object-contain max-w-[140px] xl:max-w-[160px] 3xl:max-w-[200px] 4xl:max-w-[242px] w-full mx-auto"
                />
                <div className="img-shadow absolute bottom-5 left-0 h-[80px] 4xl:h-[132px] w-full"></div>
              </figure>
              <h3 className="text-3xl 3xl:text-[40px] font-bangers text-white leading-none">
                {item.name}
              </h3>
              <img src={BarImg} alt="barImg" className="my-2 3xl:my-4 mx-auto" />
              <span className="text-sm font-normal font-bangers text-white mb-6 block">
                {item.description}
              </span>
              <Link className="border border-custom-transparent-green h-12 3xl:h-[58px] rounded-[50px] text-sm font-semibold leading-none flex items-center justify-center bg-white">
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
