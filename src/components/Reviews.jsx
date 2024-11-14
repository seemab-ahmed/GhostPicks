import React from "react";
import ProfileImg from "../assets/images/profile.png";
import GermanyImg from "../assets/images/germany.svg";
import StarImg from "../assets/images/star.svg";

const Reviews = () => {
  const reviewsList = [
    {
      thumbnail: ProfileImg,
      flag: GermanyImg,
      title: "Pierre L.",
      para: "The templates from Nick have no comparison in terms of attention to detail and quality. This is usually what you get when you pay thousands of dollars to a professional designer to do it for you, but for a fraction of a cost.",
      star: StarImg,
    },
    {
      thumbnail: ProfileImg,
      flag: GermanyImg,
      title: "Pierre L.",
      para: "In a digital landscape where speed and flexibility are key, this template stands out as a game-changer",
      star: StarImg,
    },
    {
      thumbnail: ProfileImg,
      flag: GermanyImg,
      title: "Pierre L.",
      para: "Huge fan of Nick's unique, elegant and innovative Framer templates - making it super easy to build high end, world class E-commerce experiences for digital products and storefronts ....even for those of us non tech types just getting started with Framer. (Taro may be my favorite, and most complete template across the entire Framer marketplace - much appreciation to Nick for sharing it - and his work - so generously with the community)",
      star: StarImg,
    },
    {
      thumbnail: ProfileImg,
      flag: GermanyImg,
      title: "Pierre L.",
      para: "In a digital landscape where speed and flexibility are key, this template stands out as a game-changer",
      star: StarImg,
    },
    {
      thumbnail: ProfileImg,
      flag: GermanyImg,
      title: "Pierre L.",
      para: "Huge fan of Nick's unique, elegant and innovative Framer templates - making it super easy to build high end, world class E-commerce experiences for digital products and storefronts ....even for those of us non tech types just getting started with Framer. (Taro may be my favorite, and most complete template across the entire Framer marketplace - much appreciation to Nick for sharing it - and his work - so generously with the community)",
      star: StarImg,
    },
    {
      thumbnail: ProfileImg,
      flag: GermanyImg,
      title: "Pierre L.",
      para: "The templates from Nick have no comparison in terms of attention to detail and quality. This is usually what you get when you pay thousands of dollars to a professional designer to do it for you, but for a fraction of a cost.",
      star: StarImg,
    },
    {
      thumbnail: ProfileImg,
      flag: GermanyImg,
      title: "Pierre L.",
      para: "Huge fan of Nick's unique, elegant and innovative Framer templates - making it super easy to build high end, world class E-commerce experiences for digital products and storefronts ....even for those of us non tech types just getting started with Framer. (Taro may be my favorite, and most complete template across the entire Framer marketplace - much appreciation to Nick for sharing it - and his work - so generously with the community)",
      star: StarImg,
    },
    {
      thumbnail: ProfileImg,
      flag: GermanyImg,
      title: "Pierre L.",
      para: "The templates from Nick have no comparison in terms of attention to detail and quality. This is usually what you get when you pay thousands of dollars to a professional designer to do it for you, but for a fraction of a cost.",
      star: StarImg,
    },
    {
      thumbnail: ProfileImg,
      flag: GermanyImg,
      title: "Pierre L.",
      para: "In a digital landscape where speed and flexibility are key, this template stands out as a game-changer",
      star: StarImg,
    },
  ];

  // Divide reviews into three columns
  const columnOne = reviewsList.filter((_, index) => index % 3 === 0);
  const columnTwo = reviewsList.filter((_, index) => index % 3 === 1);
  const columnThree = reviewsList.filter((_, index) => index % 3 === 2);

  return (
    <section className="py-10 xl:py-20">
      <div className="container">
        <div
          className="mb-10 xl:mb-[60px] max-w-[735px] w-full mx-auto text-center"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h2 className="text-heading2">What Traders Say About WagerKingz</h2>
        </div>
      </div>
      <div className="relative">
        <div className="bg-custom-black-two-gradient h-[266px] w-full absolute left-0 top-0 z-[1] rotate-180"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 auto-rows-auto lg:gap-5 max-w-[1366px] w-[90%] mx-auto">
          {/* Column 1 */}
          <div>
            {columnOne.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
          {/* Column 2 */}
          <div>
            {columnTwo.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
          {/* Column 3 */}
          <div>
            {columnThree.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        </div>
        <div className="bg-custom-black-two-gradient h-[266px] w-full absolute left-0 bottom-0 z-[1]"></div>
      </div>
    </section>
  );
};

const ReviewCard = ({ review }) => (
  <div
    className="border border-[rgba(255,255,255,0.10)] bg-custom-gradient-two p-5 xl:p-8 rounded-[20px] relative mb-5"
    data-aos="zoom-in"
    data-aos-duration="2500"
  >
    <div className="bg-custom-radial-gradient-two absolute left-0 top-0 h-[1px] w-full -z-[1]"></div>
    <div className="flex items-center justify-between mb-5 xl:mb-7">
      <div className="flex items-center justify-between gap-2.5">
        <img src={review.thumbnail} alt="profile" />
        <span className="text-lg xl:text-xl font-medium text-white leading-none opacity-60">
          {review.title}
        </span>
      </div>
      <img src={review.flag} alt="flag" />
    </div>
    <p className="text-sm xl:text-base font-normal leading-8 text-white mb-5 xl:mb-7">
      {review.para}
    </p>
    <div className="flex items-center gap-2">
      {Array(5)
        .fill(0)
        .map((_, i) => (
          <img key={i} src={review.star} alt="star" className="w-6 h-6" />
        ))}
    </div>
  </div>
);

export default Reviews;
