import React, { useState } from "react";
import { Link } from "react-router-dom";

const Funded = ({ account, profit, referrals }) => {
  const [accountSizeIndex, setAccountSizeIndex] = useState(0);
  const [profitRateProgress, setProfitRateProgress] = useState(100);
  const [referralsProgress, setReferralsProgress] = useState(170);

  const accountSizes = [5000, 10000, 25000, 50000];

  const calculateProfitPerMonth = (accountSize, profitRate) => {
    return ((accountSize * profitRate) / 100).toFixed(2);
  };

  const accountSize = accountSizes[accountSizeIndex];
  const profitPerMonth = calculateProfitPerMonth(
    accountSize,
    profitRateProgress
  );
  const profitSplit = (profitPerMonth / 2).toFixed(2);
  const referalsEarning = (71400 / 170) * referralsProgress;

  const handleAccountSizeChange = (e) => {
    setAccountSizeIndex(Number(e.target.value));
  };

  const handleProfitRateChange = (e) => {
    setProfitRateProgress(Number(e.target.value));
  };

  const handleReferralChange = (e) => {
    setReferralsProgress(Number(e.target.value));
  };

  return (
    <section className="py-10 xl:py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div
            className="text-left"
            data-aos="fade-right"
            data-aos-duration="3000"
          >
            <Link
              to="/"
              className="text-xs xl:text-sm font-semibold text-saffronMango leading-none h-[37px] flex items-center justify-center px-5 xl:px-8 rounded-[50px] capitalize bg-saffronMango-radial-gradient border border-custom-transparent-saffron max-w-fit mb-5 xl:mb-7 scale-100 transition-all hover:scale-110"
            >
              Our Risk, Your Bets
            </Link>
            <h2 className="text-heading2">How Much Can You Make?</h2>
            <p className="text-body mb-10">
              The time is now to get funded with our capital, and earn real
              rewards from your picks!
            </p>
            <Link
              to=""
              className="max-w-[175px] w-full text-base font-semibold text-jaguar leading-none bg-custom-muddy-gradient border border-custom-transparent-muddy rounded-[50px] h-12 xl:h-[58px] flex items-center justify-center scale-100 transition-all hover:scale-110"
            >
              Start Challenge
            </Link>
          </div>
          <div
            className="p-5 xl:p-8 rounded-[20px] border-[4px] border-[rgba(255,230,46,0.10)] bg-[#242108] shadow-custom-muddy-three"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            {account && (
              <div className="rounded-[10px] bg-custom-transparent-white p-5 mb-2.5 relative">
                <h3 className="text-lg lg:text-2xl xl:text-[32px] font-bangers mb-4 xl:mb-6 leading-none text-white">
                  Account size
                </h3>
                <div>
                  <div className="flex justify-between mb-4 xl:mb-6 py-2.5">
                    <span className="text-base font-semibold text-white">
                      $5k
                    </span>
                    <span className="text-sm font-semibold text-white">
                      $50k
                    </span>
                  </div>
                  <div className="py-4">
                    <div className="relative w-full bg-custom-transparent-white rounded-full h-2.5 max-w-[510px]">
                      <div
                        className="bg-white h-2.5 rounded-full relative"
                        style={{
                          width: `${
                            (accountSizeIndex / (accountSizes.length - 1)) * 100
                          }%`,
                        }}
                      >
                        <span
                          className="absolute top-1/2 -translate-y-1/2 h-7 xl:h-10 px-3 xl:px-5 flex items-center justify-center rounded-full bg-white text-sm xl:text-base font-semibold leading-none text-jaguar"
                          style={{
                            right: accountSizeIndex === 0 ? "auto" : "-0.5rem",
                            left: accountSizeIndex === 0 ? "0" : "auto",
                          }}
                        >
                          {accountSize.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 0,
                          })}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max={accountSizes.length - 1}
                        value={accountSizeIndex}
                        onChange={handleAccountSizeChange}
                        className="absolute top-0 left-0 w-full h-2.5 opacity-0 cursor-pointer"
                        style={{ WebkitAppearance: "none" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {referrals && (
              <div className="rounded-[10px] bg-custom-transparent-white p-5 relative">
                <h3 className="text-lg lg:text-2xl xl:text-[32px] font-bangers mb-4 xl:mb-6 leading-none text-white">
                  Referral
                </h3>
                <div className="py-4">
                  <div className="relative w-full bg-custom-transparent-white rounded-full h-2.5 max-w-[510px]">
                    <div
                      className="bg-white h-2.5 rounded-full relative"
                      style={{
                        width: `${
                          ((referralsProgress - 10) / (500 - 10)) * 100
                        }%`,
                      }}
                    >
                      <span
                        className="absolute top-1/2 -translate-y-1/2 h-7 xl:h-10 px-3 xl:px-5 flex items-center justify-center rounded-full bg-white text-sm xl:text-base font-semibold leading-none text-jaguar"
                        style={{
                          right: referralsProgress < 20 ? "auto" : "-0.5rem",
                          left: referralsProgress < 20 ? "0" : "auto",
                        }}
                      >
                        {referralsProgress}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="500"
                      value={referralsProgress}
                      onChange={handleReferralChange}
                      className="absolute top-0 left-0 w-full h-2.5 opacity-0 cursor-pointer"
                      style={{ WebkitAppearance: "none" }}
                    />
                  </div>
                </div>
              </div>
            )}
            {profit && (
              <div className="rounded-[10px] bg-custom-transparent-white p-5 relative">
                <h3 className="text-lg lg:text-2xl xl:text-[32px] font-bangers mb-4 xl:mb-6 leading-none text-white">
                  Profit rate
                </h3>
                <div className="py-4">
                  <div className="relative w-full bg-custom-transparent-white rounded-full h-2.5 max-w-[510px]">
                    <div
                      className="bg-white h-2.5 rounded-full relative"
                      style={{ width: `${profitRateProgress}%` }}
                    >
                      <span
                        className="absolute top-1/2 -translate-y-1/2 h-7 xl:h-10 px-3 xl:px-5 flex items-center justify-center rounded-full bg-white text-sm xl:text-base font-semibold leading-none text-jaguar"
                        style={{
                          right: profitRateProgress < 5 ? "auto" : "-0.5rem",
                          left: profitRateProgress < 5 ? "0" : "auto",
                        }}
                      >
                        {profitRateProgress}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={profitRateProgress}
                      onChange={handleProfitRateChange}
                      className="absolute top-0 left-0 w-full h-2.5 opacity-0 cursor-pointer"
                      style={{ WebkitAppearance: "none" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <Link className="text-sm xl:text-base font-semibold leading-none text-jaguar h-10 lg:h-12 xl:h-[60px] capitalize bg-white rounded-full flex items-center justify-center mt-8">
              {parseFloat(
                referrals ? referalsEarning : profitPerMonth
              ).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
              /Month
            </Link>
            {!referrals && (
              <Link className="text-sm xl:text-base font-semibold leading-none text-white h-10 lg:h-12 xl:h-[60px] capitalize rounded-full flex items-center justify-center">
                With 50% Profit Split:{" "}
                {parseFloat(profitSplit).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funded;
