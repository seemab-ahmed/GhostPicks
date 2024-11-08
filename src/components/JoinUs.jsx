import React from "react";
import { Link } from "react-router-dom";
import JoinUsImg from "../assets/images/join-bg.png"

const JoinUs = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div
          className="pt-[165px] pb-[350px] text-center bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${JoinUsImg})` }}
        >
          <h2 className="text-[56px] font-semibold leading-none text-white mb-8">Join A Great Community!</h2>
          <p className="text-base leading-8 text-[rgba(255,255,255,0.8)] mb-10">
            Join a vibrant community of like-minded sports enthusiasts and join
            in on the conversation!
          </p>
          <Link
            to="/"
            className="text-sm font-semibold text-jaguar shadow-custom-white-three leading-none h-[58px] flex items-center justify-center px-8 rounded-[50px] capitalize bg-custom-mint border border-[rgba(200,255,206,0.7)] max-w-[248px] w-full mx-auto"
          >
            Join Discord
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
