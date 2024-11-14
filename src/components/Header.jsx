import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo_new.svg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "How it works", path: "/work" },
  { name: "Refer & Earn", path: "/refer&earn" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="py-5 md:py-10">
      <div className="container">
        <div className="bg-custom-transparent-white rounded-[10px] p-5 border border-custom-transparent-white flex items-center justify-between relative">
          <div className="max-w-[284px] w-full">
            <NavLink
              className="text-lg font-normal font-bangers uppercase text-white flex items-center gap-2"
              to="/"
            >
              <img src={Logo} alt="Logo" />
            </NavLink>
          </div>
          <nav
            className={`absolute left-0 top-20 lg:static bg-black lg:bg-transparent flex flex-col lg:flex-row justify-between items-center max-w-full lg:max-w-[calc(100%-284px)] w-full transition-all rounded-bl-[10px] lg:rounded-bl-none rounded-br-[10px] lg:rounded-br-none origin-top p-8 lg:p-0 ${
              menuOpen ? "scale-y-100 z-10" : "scale-y-0 lg:scale-y-100"
            }`}
          >
            <ul className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-10 mb-5 lg:mb-0 flex-grow">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-sm font-normal leading-none ${
                        isActive ? "text-saffronMango" : "text-white"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex flex-col lg:flex-row items-center gap-2.5 w-full max-w-[180px] lg:max-w-[285px] lg:w-auto">
              <NavLink
                to="/"
                className="text-sm font-semibold text-white leading-none h-10 lg:h-[58px] flex items-center justify-center px-8 rounded-[50px] capitalize bg-white-radial-gradient border border-border-transparent-white scale-100 transition-all hover:scale-110 w-full lg:w-auto"
              >
                log in
              </NavLink>
              <NavLink
                to="/"
                className="text-sm font-semibold text-saffronMango leading-none h-10 lg:h-[58px] flex items-center justify-center px-8 rounded-[50px] capitalize bg-saffronMango-radial-gradient border border-custom-transparent-saffron scale-100 transition-all hover:scale-110 w-full lg:w-auto"
              >
                get funded
              </NavLink>
            </div>
          </nav>

          <button
            className={`flex flex-col justify-between lg:hidden w-8 h-5 ${
              menuOpen ? "open-menu" : ""
            }`}
            onClick={toggleMenu}
          >
            <span
              className="w-full h-0.5 bg-white transition-transform transform rotate-0"
              style={{
                transform: menuOpen
                  ? "rotate(45deg) translateY(12px)"
                  : "rotate(0)",
              }}
            ></span>
            <span
              className={`w-full h-0.5 bg-white transition-opacity ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className="w-full h-0.5 bg-white transition-transform transform rotate-0"
              style={{
                transform: menuOpen
                  ? "rotate(-45deg) translateY(-12px)"
                  : "rotate(0)",
              }}
            ></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
