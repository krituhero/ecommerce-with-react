import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const About = () => {
  return (
    <>
      <Header />
      <div className="w-full h-auto p-10 flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2 md:p-12">
          <h2 className="font-semibold text-[30px] pb-8">Our Story</h2>
          <p className="text-gray-900 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            veritatis obcaecati alias dicta consectetur eaque illum ducimus
            provident rem iusto voluptatem corporis adipisci earum, qui aliquid
            nisi velit quibusdam, repellat ad corrupti.
          </p>
        </div>
        <div className="w-full md:w-1/2 md:pr-10">
          <img
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            src="https://wallpapercave.com/wp/wp3386769.jpg"
            alt="Beautiful Scenery"
          />
        </div>
      </div>
      <div className="p-8 space-y-8">
        {/* Stats Section */}
        <div className="grid grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-center border p-4 rounded-xl shadow-md">
            <p className="text-2xl font-bold">10.5k</p>
            <p className="text-gray-600">Sellers active on our site</p>
          </div>
          <div className="flex flex-col items-center justify-center border p-4 rounded-xl shadow-md bg-red-500 text-white">
            <p className="text-2xl font-bold">33k</p>
            <p>Monthly Product Sale</p>
          </div>
          <div className="flex flex-col items-center justify-center border p-4 rounded-xl shadow-md">
            <p className="text-2xl font-bold">45.5k</p>
            <p className="text-gray-600">Customers active on our site</p>
          </div>
          <div className="flex flex-col items-center justify-center border p-4 rounded-xl shadow-md">
            <p className="text-2xl font-bold">25k</p>
            <p className="text-gray-600">Annual gross sale on our site</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="grid grid-cols-3 gap-2">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center text-center md:pl-10">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4HylE0f29dva2cT0sVATzimTJ4todrRnS6w&s"
              alt="Tom Cruise"
              className="rounded-5 w-45 h-45 object-cover mb-4"
            />
            <p className="text-lg font-bold">Tom Cruise</p>
            <p className="text-gray-600">Founder & Chairman</p>
            <div className="flex space-x-4 mt-2 text-gray-500">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3ZLdoWUoejS15lLDlx5r3lKDXQufC0OgRrg&s"
              alt="Emma Watson"
              className="rounded-5 w-45 h-45 mb-4"
            />
            <p className="text-lg font-bold">Emma Watson</p>
            <p className="text-gray-600">Managing Director</p>
            <div className="flex space-x-4 mt-2 text-gray-500">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTagTAxHulUhsm1wDmhqH1dNypJco_BH1BeCw&s"
              alt="Will Smith"
              className="rounded-5 w-45 h-45 object-cover mb-4"
            />
            <p className="text-lg font-bold">Will Smith</p>
            <p className="text-gray-600">Product Designer</p>
            <div className="flex space-x-4 mt-2 text-gray-500">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
