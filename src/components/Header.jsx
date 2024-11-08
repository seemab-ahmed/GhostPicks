import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "How it works", path: "/work" },
  { name: "Refer & Earn", path: "/refer&earn" },
];

const Header = () => {
  return (
    <header className="py-10">
      <div className="container">
        <div className="bg-custom-transparent-white rounded-[10px] p-5 border border-custom-transparent-white flex items-center justify-between relative">
          <div className="max-w-[284px] w-full">
            <Link className="text-lg font-normal font-bangers uppercase text-white flex items-center gap-2">
              <img src={Logo} alt="" />
              GhostPicks
            </Link>
          </div>
          <ul className="flex items-center justify-center gap-10 flex-grow">
            {navLinks.map((link) => (
              <li>
                <Link
                  to={link.path}
                  className="text-sm font-normal text-white leading-none"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2.5">
            <Link
              to="/"
              className="text-sm font-semibold text-white leading-none h-[58px] flex items-center justify-center px-8 rounded-[50px] capitalize bg-white-radial-gradient border border-border-transparent-white scale-100 transition-all hover:scale-110"
            >
              log in
            </Link>
            <Link
              to="/"
              className="text-sm font-semibold text-spearmint leading-none h-[58px] flex items-center justify-center px-8 rounded-[50px] capitalize bg-spearmint-radial-gradient border border-custom-transparent-green scale-100 transition-all hover:scale-110"
            >
              get funded
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
