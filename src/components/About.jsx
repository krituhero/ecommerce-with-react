import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { TbTruckDelivery } from "react-icons/tb";
import { SiAdguard } from "react-icons/si";
import { RiCustomerServiceLine } from "react-icons/ri";


const About = () => {
  return (
    <>
      <Header />
      <div className="w-full h-auto p-10 pl-[100px] lg:pr-0 flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2 lg:pl-0 md:p-12">
          <h2 className="font-semibold font-roboto text-[36px] pb-8">Our Story</h2>
          <p className="text-gray-900 font-roboto">
          Launced in 2025, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Nepal. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
          <br />
          <br />
          Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:pr-0 md:pr-10">
          <img
            className="w-full h-[400px] object-cover rounded-l-lg shadow-lg"
            src="https://wallpapercave.com/wp/wp3386769.jpg"
            alt="Beautiful Scenery"
          />
        </div>
      </div>
      <div className="p-10 pl-[100px] pr-[140px] ">
        {/* Stats Section */}
        <div className="grid grid-cols-4 gap-4 mb-[100px] h-[150px]">
          <div className="flex flex-col items-center justify-center border p-4 rounded-sm">
            <p className="text-2xl font-bold">10.5k</p>
            <p className="text-gray-600">Sellers active on our site</p>
          </div>
          <div className="flex flex-col items-center justify-center border p-4 rounded-md bg-red-500 text-white">
            <p className="text-2xl font-bold">33k</p>
            <p>Monthly Product Sale</p>
          </div>
          <div className="flex flex-col items-center justify-center border p-4 rounded-md">
            <p className="text-2xl font-bold">45.5k</p>
            <p className="text-gray-600">Customers active on our site</p>
          </div>
          <div className="flex flex-col items-center justify-center border p-4 rounded-md">
            <p className="text-2xl font-bold">25k</p>
            <p className="text-gray-600">Annual gross sale on our site</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="grid grid-cols-3 gap-2">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4HylE0f29dva2cT0sVATzimTJ4todrRnS6w&s"
              alt="Tom Cruise"
              className="w-[250px] h-[300px] object-cover mb-4"
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
              className="w-[250px] h-[300px] object-cover mb-4"
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
              className=" w-[250px] h-[300px] object-cover mb-4"
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
      <div className="flex justify-center items-center gap-16 mb-16 mt-16">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full">
            <TbTruckDelivery className="p-2 bg-black rounded-full text-white" size={45}/> 
          </div>
          <span className="font-roboto text-xl mt-2 font-bold">FREE AND FAST DELIVERY</span>
          <span className="font-roboto">Free delivery for all orders over $140</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full">
            <RiCustomerServiceLine className="p-2 bg-black rounded-full text-white" size={40} />
          </div>
          <span className="font-roboto text-xl mt-2 font-bold">24/7 CUSTOMER SERVICE</span>
          <span className="font-roboto">Friendly 24/7 customer support</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full">
            <SiAdguard className="p-2 bg-black rounded-full text-white" size={40}/>
          </div>
          <span className="font-roboto text-xl mt-2 font-bold">MONEY BACK GUARANTEE</span>
          <span className="font-roboto">We return money within 30 days</span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
