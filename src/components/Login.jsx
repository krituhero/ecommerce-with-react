import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row mt-20 mb-20 gap-20 justify-center shadow-md">
        <div className="md:w-[50%] md:ml-[150px] hidden sm:block  max-h-max">
          <img
            className="h-[500px] hidden sm:block"
            src="../public/images/signup.jpg"
            alt="image description"
          />
        </div>
        <div className="md:w-[40%] md:mr-[150px] sm:justify-center">
          <form>
            <h1 className="text-black text-4xl font-medium leading-[50px] ">
              Log-In
            </h1>
            <p className="text-black text-base font-normal leading-normal">
              Enter your details below
            </p>
            <div className="flex flex-col gap-4 mt-6 ">
              <input
                type="text"
                id="emailOrNumber"
                name="emailOrNumber"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$|\d+"
                placeholder="Email or phone"
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
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
