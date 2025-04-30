import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row mt-8 mb-20 gap-20 justify-center items-center ">
        <div className="md:w-[50%] md:ml-[50px] lg:ml-[0px] hidden sm:block  max-h-max">
          <img
            className="h-[500px] hidden sm:block"
            src="../public/images/signup.jpg"
            alt="image description"
          />
        </div>
        <div className="flex flex-col md:w-[40%] md:mr-[150px] sm:justify-center">
          <form>
            <h1 className="text-black text-4xl font-medium leading-[50px] ">
              Log in to Exclusive
            </h1>
            <p className="text-black mt-2 text-base font-normal leading-normal">
              Enter your details below
            </p>
            <div className="flex flex-col gap-4 mt-6 ">
              <input
                type="text"
                id="emailOrNumber"
                name="emailOrNumber"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|\d+"
                placeholder="Email or Phone Number"
                required
                className="border-b-2 border-gray-400 p-2 pl-0 focus:outline-none"
              />
              <input
                placeholder="Password"
                required
                id="passWordBox"
                className="border-b-2 border-gray-400 p-2 pl-0 focus:outline-none"
              />
            </div>
          </form>
          <div className="mt-8 flex justify-between items-center ">
            <button className="text-white bg-red-500 py-3 px-5 ml-2 text-md rounded-md">Log In</button>
            <span className="text-red-500 font-Roboto-300">Forgot Password ?</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
