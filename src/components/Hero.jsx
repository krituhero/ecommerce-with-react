import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Slidercarousel from "./Slidercarousel";

function Hero() {
  const [showSecondaryNav, setShowSecondaryNav] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(
    window.innerWidth >= 640
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 830);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMediumScreen) {
      setShowSecondaryNav(false);
    }
  }, [isMediumScreen]);

  const handleDropDown = () => {
    if (!isMediumScreen) {
      setShowSecondaryNav((prev) => !prev);
    }
  };

  const slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];

  return (
    <>
      <div className="flex flex-wrap lg:flex-nowrap min-h-[calc(100vh-8rem) mb-20">
        {/* Navbar Section */}
        <nav
          className={`${
            isMediumScreen
              ? "flex flex-col gap-2 font-medium w-[11rem] ml-24  bg-white border-r-[1px] border-secondary pr-4 h-auto"
              : showSecondaryNav
              ? "flex flex-col gap-2 font-medium w-[11rem] ml-24  bg-white border-r-[1px] border-secondary pr-4 h-auto"
              : "hidden"
          }`}
        >
          <NavLink
            className="text-black-400 pt-6 hover:text-blue-600 hover:font-bold hover:cursor-pointer"
            to="/"
          >
            Woman&#39;s Fashion
          </NavLink>
          <NavLink
            className="text-black-400 hover:text-blue-600 hover:font-bold hover:cursor-pointer"
            to="/"
          >
            Men&#39;s Fashion
          </NavLink>
          <NavLink
            className="text-black-400 hover:text-blue-600 hover:font-bold hover:cursor-pointer"
            to="/"
          >
            Electronics
          </NavLink>
          <NavLink
            className="text-black-400 hover:text-blue-600 hover:font-bold hover:cursor-pointer"
            to="/"
          >
            Home & Lifestyle
          </NavLink>
          <NavLink
            className="text-black-400 hover:text-blue-600 hover:font-bold hover:cursor-pointer"
            to="/"
          >
            Medicine
          </NavLink>
          <NavLink
            className="text-black-400 hover:text-blue-600 hover:font-bold hover:cursor-pointer"
            to="/"
          >
            Sports & Outdoor
          </NavLink>
          <NavLink
            className="text-black-400 hover:text-blue-600 hover:font-bold hover:cursor-pointer"
            to="/"
          >
            Baby&#39;s & Toys
          </NavLink>
          <NavLink
            className="text-black-400 hover:text-blue-600 hover:font-bold hover:cursor-pointer"
            to="/"
          >
            Groceries & Pets
          </NavLink>
          <NavLink
            className="text-black-400 hover:text-blue-600 hover:font-bold hover:cursor-pointer"
            to="/"
          >
            Health & Beauty
          </NavLink>
        </nav>

        {/* Slider Section */}
        <div
          className={`${
            isMediumScreen ? "flex px-4 w-[60%] ml-24 pt-6" : "w-full px-4 pt-6"
          }h-full`}
        >
          <Slidercarousel slides={slides} />
        </div>
      </div>
    </>
  );
}

export default Hero;
