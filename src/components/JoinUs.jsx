import React from "react";
import { Link } from "react-router-dom";
import JoinUsImg from "../assets/images/join-bg.png";

const JoinUs = () => {
  return (
    <section className="py-10 xl:py-20">
      <div className="container">
        <div
          className="pt-24 xl:pt-[165px] pb-12 md:pb-56 xl:pb-[350px] text-center bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${JoinUsImg})` }}
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h2 className="text-heading2">Join A Great Community!</h2>
          <p className="text-body mb-5 xlmb-10">
            Join a vibrant community of like-minded sports enthusiasts and join
            in on the conversation!
          </p>
          <Link
            to="/"
            className="text-sm lg:text-base font-semibold text-jaguar shadow-custom-white-three leading-none h-12 xl:h-[67px] flex items-center justify-center px-8 rounded-[50px] capitalize bg-custom-mint border border-[rgba(200,255,206,0.7)] max-w-[180px] xl:max-w-[248px] w-full mx-auto"
          >
            Join Discord
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
