import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Header from "./Header";
import Footer from "./Footer";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <div className="flex flex-col w-[100%] justify-round mb-12 pr-[92px] gap-4 mt-11 items-center text-gray-800 md:flex-row">
        <div className="max-w-[320px] h-[400px] border-none shadow-xl sm:w-[90%] lg:ml-[100px]">
          <div className="p-4 pb-2 font-bold text-[16px]">
            <div className="flex items-center gap-4 m-2">
              <div className="ml-2 w-[30px] h-[30px] rounded-[50%] bg-red-700">
                <FaPhoneAlt
                  style={{ margin: ".4rem", color: "white" }}
                ></FaPhoneAlt>
              </div>
              <h3 className="font-medium text-[18px] font-roboto">Call To Us</h3>
            </div>
            <p className="text-[14px] mb-2  m-4 font-roboto font-normal">
              We are available 24/7, 7days a week.
            </p>
            <p className="text-[14px] m-4 mt-2 font-roboto font-normal">Phone: +977 9800000000</p>
          </div>
          <hr className="border border-gray-400 mb-8"></hr>
          <div className="p-4 pt-0 font-bold text-[16px]">
            <div className="mail">
              <div className="flex gap-4 m-2">
                <div className="ml-2 w-[30px] h-[30px] rounded-[50%] bg-red-700">
                  <CiMail style={{ margin: ".4rem", color: "white" }}></CiMail>
                </div>
                <h3 className="font-bold text-[18px] font-roboto font-medium">Write To Us</h3>
              </div>
            </div>
            <p className="text-[14px] m-4 mb-2 font-roboto font-normal">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-[14px] m-4 mt-2 mb-2 font-roboto font-normal">Emails: kri@gmail.com</p>
            <p className="text-[14px] m-4 mt-2 font-roboto font-normal">Emails: manis@gmail.com</p>
          </div>
        </div>
        {/* Contact Form */}
        <div className="flex flex-col w-full max-w-[800px] h-auto border-none shadow-xl p-6 gap-4 sm:w-[90%] md:h-[400px]">
          <form
            className="flex flex-col w-full items-start gap-4"
            onSubmit={handleSubmit}
          >
            {/* Row of Inputs */}
            <div className="flex flex-col gap-4 w-full md:flex-row">
              <input
                type="text"
                className="w-full md:w-[30%] h-[50px] rounded-md bg-gray-100 p-2"
                placeholder="Your name"
                required
              />
              <input
                type="email"
                className="w-full md:w-[30%] h-[50px] rounded-md bg-gray-100 p-2"
                placeholder="Your email"
                required
              />
              <input
                type="tel"
                className="w-full md:w-[30%] h-[50px] rounded-md bg-gray-100 p-2"
                placeholder="Your phone"
              />
            </div>
            <textarea
              className="w-full h-[207px] rounded-sm bg-gray-100 p-2"
              placeholder="Your message"
              required
            />
            <div className="flex w-full justify-end ">
            <button
              type="submit"
              className="font-semibold w-full max-w-[215px] h-[56px] mt-4 border-gray-700 rounded-md  bg-red-700 text-white hover:bg-red-500 hover:text-gray-800"
            >
              Send Message
            </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
