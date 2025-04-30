import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";

const Signup = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row mt-8 mb-20 gap-20 justify-center items-center ">
        <div className="md:w-[50%] md:ml-[50px] lg:ml-[0px]  hidden sm:block  max-h-max">
          <img
            className="h-[500px] hidden sm:block"
            src="../public/images/signup.jpg"
            alt="image description"
          />
        </div>
        <div className="flex flex-col md:w-[40%] md:mr-[150px] sm:justify-center">
          <form>
            <h1 className="text-black text-4xl font-medium leading-[50px] ">
              Create an account
            </h1>
            <p className="text-black text-base font-normal leading-normal">
              Enter your details below
            </p>
            <div className="flex flex-col gap-4 mt-6 ">
              <input
                type="text"
                placeholder="Name"
                id="firstName"
                className="border-b-2 border-gray-400 p-2 focus:outline-none"
                value=""
                required
              />
              <input
                type="text"
                id="emailOrNumber"
                name="emailOrNumber"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|\d+"
                placeholder="Enter email or number"
                required
                className="border-b-2 border-gray-400 p-2 focus:outline-none"
              />
              <input
                placeholder="Password"
                required
                id="passWordBox"
                className="border-b-2 border-gray-400 p-2 focus:outline-none"
              />
            </div>
            <div className="w-96 max-sm:w-full h-14 px-32 max-sm:p-0 py-4 mt-10 bg-red-500 rounded justify-center items-center gap-2.5 inline-flex transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
              <button className="text-neutral-50 font-semibold" type="submit">
                Create Account
              </button>
            </div>

            <div className="flex flex-col pt-4 pb-10 ">
              <div className="w-96 max-sm:w-full h-14 px-4 max-sm:px-0 flex items-center justify-center rounded border border-black border-opacity-40 transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
                <button
                  className="text-black text-base font-normal leading-normal flex flex-row items-center gap-4"
                  type="button"
                >
                  <img src="./icons/Icon-Google.png" className="w-5 h-5" alt="Google Icon" />
                  Sign up with Google
                </button>
              </div>

            </div>
            <div className="flex flex-row gap-4 justify-center mb-0">
              <p className="opacity-70 mb-10  text-black text-base font-normal leading-normal">
                Already have account?
              </p>
              <Link
                className="opacity-70 text-black text-base font-medium leading-normal underline underline-offset-8"
                to="/login"
              >
                Log in
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
