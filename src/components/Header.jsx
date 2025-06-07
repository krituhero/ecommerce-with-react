import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header_container font-Roboto-300">
      {/* Announcement Bar on top of the page */}
      <div className="h-12 bg-black w-full text-white justify-center items-center hidden lg:flex font-Roboto">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
      </div>

      {/* Header Section */}
      <div className="h-24 w-full bg-white flex items-center justify-center border-solid border-b-gray-100 border-b-2">
        <div className="header w-[1070px] h-9 bg-white flex flex-wrap justify-between items-center mx-auto">
          {/* Logo */}
          <span className="self-center text-xl font-semibold whitespace-nowrap font-Roboto">
            Exclusive
          </span>

          {/* Right Section */}
          <div className="flex items-center lg:order-2">
            {/* Search Input Field */}
            <div className="lg:flex lg:relative lg:w-[280px] lg:mr-4 hidden">
              <input
                type="text"
                name="search"
                id="search"
                className="pl-4 pr-10 w-full h-[40px] bg-gray-50 rounded-md font-Roboto"
                placeholder="What are you looking for?"
              />
              <img
                src="icons/search.png"
                alt="search"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 w-4 h-4"
              />
            </div>

            {/* Icons */}
            <Link to="/fav"><img
              src="icons/favourite.png"
              className="w-6 h-6 mr-4"
              alt="favourites"
            /></Link>
            <Link to="/cart" className="relative">
              <img src="icons/cart.png" className="w-6 h-6 mr-4" alt="cart" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
                3
              </span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${isMenuOpen ? "block" : "hidden"
              } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 rounded font-Roboto ${isActive
                      ? 'text-gray-500'
                      : 'text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent'
                    }`
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 rounded font-Roboto ${isActive
                      ? 'text-gray-500'
                      : 'text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent'
                    }`
                  }
                  aria-current="page"
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 rounded font-Roboto ${isActive
                      ? 'text-gray-500'
                      : 'text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent'
                    }`
                  }
                  aria-current="page"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 rounded font-Roboto ${isActive
                      ? 'text-gray-500'
                      : 'text-gray-700 hover:bg-gray-50 lg:hover:bg-transparent'
                    }`
                  }
                  aria-current="page"
                >
                  Signup
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
