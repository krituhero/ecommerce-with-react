import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Slidercarousel from "./Slidercarousel";

function Hero() {
  const [showSecondaryNav, setShowSecondaryNav] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 830);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 830);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMediumScreen) setShowSecondaryNav(false);
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
    <div className="flex flex-wrap lg:flex-nowrap min-h-[calc(100vh-8rem)] gap-10 mx-20">
      {/* Navbar Section */}
      <nav
        className={`${
          isMediumScreen || showSecondaryNav
            ? "flex flex-col justify-start space-y-4 font-medium w-[12rem] bg-white border-r border-secondary pr-4 h-full pt-6"
            : "hidden"
        }`}
      >
        {[
          "Woman's Fashion",
          "Men's Fashion",
          "Electronics",
          "Home & Lifestyle",
          "Medicine",
          "Sports & Outdoor",
          "Baby's & Toys",
          "Groceries & Pets",
          "Health & Beauty",
        ].map((label, idx) => (
          <NavLink
            key={idx}
            to="/"
            className="text-black-400 hover:text-blue-600 hover:font-bold hover:cursor-pointer"
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Slider Section */}
      <div className="flex-1 ">
        <Slidercarousel slides={slides} />
      </div>
    </div>
  );
}

export default Hero;
