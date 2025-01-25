import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-full lg:h-[296px] md:h-[50px] bg-black flex flex-col items-center justify-center mt-[440px]'>
      <div className="hidden lg:w-[1170px] lg:h-[236px] lg:flex flex-row lg:gap-[87px] mt-[15px] mb-[5px] mx-[135px]">
            <div className="w-[217px] flex flex-col gap-24px">
            <div className="w-[118px] h-[24px] font-Roboto font-bold text-white mt-[15px]">Exclusive</div>
            <Link to="/" className="w-[101px] h-[28px] font-Roboto font-thin text-white mt-[10px] cursor-pointer block">Subscribe</Link>
            <Link to="/" className="w-[206px] h-[24px] font-Roboto font-thin text-white mt-[10px] block">Get 10% off your first order</Link>
            <input className="w-[217px] h-[40px] mt-[15px] py-[10px] px-[10px] rounded-[5px] border-white border-[1px] bg-black" type="text" placeholder='Enter your email' />
        </div>
        <div className="w-[175px]">
            <div className="w-[118px] h-[24px] font-Roboto font-bold text-white mt-[15px]">Support</div>
            <div className="w-[190px] h-[38px] font-Roboto font-thin text-white mt-[10px]">P826+3VR, Sundhara Rd, Kathmandu 44600</div>
            <div className="w-[206px] h-[24px] font-Roboto font-thin text-white mt-[20px]">exclusive@gmail.com</div>
            <div className="w-[206px] h-[24px] font-Roboto font-thin text-white mt-[10px]">+977 1234567890</div>
        </div>
        <div className="w-[123px]">
            <div className="w-[118px] h-[autopx] font-Roboto font-bold text-white mt-[15px]">Account</div>
            <Link to="/" className="w-[110px] h-[24px] font-Roboto font-thin text-white mt-[10px] cursor-pointer block">My Account</Link>
            <Link to="/" className="w-[120px] h-[24px] font-Roboto font-thin text-white mt-[10px] cursor-pointer block">Login / Register</Link>
            <Link to="/" className="w-[110px] h-[24px] font-Roboto font-thin text-white mt-[10px] cursor-pointer block">Cart</Link>
            <Link to="/" className="w-[110px] h-[24px] font-Roboto font-thin text-white mt-[10px] cursor-pointer block">Wishlist</Link>
            <Link to="/" className="w-[110px] h-[24px] font-Roboto font-thin text-white mt-[10px] cursor-pointer block">Shop</Link>
        </div>
        <div className="w-[109px]">
            <div className="w-[118px] h-[24px] font-Roboto font-bold text-white mt-[15px] ">Quick Link</div>
            <Link to="/" className="w-[120px] h-[24px] font-Roboto font-thin text-white mt-[10px] cursor-pointer block">Privacy Policy</Link>
            <Link to="/" className="w-[120px] h-[24px] font-Roboto font-thin text-white mt-[10px] cursor-pointer block">Terms of Use</Link>
            <Link to="/" className="w-[120px] h-[24px] font-Roboto font-thin text-white mt-[10px] cursor-pointer block">FAQ</Link>
            <Link to="/" className="w-[120px] h-[24px] font-Roboto font-thin text-white mt-[10px] cursor-pointer block">Contact</Link>
            
        </div>
        <div className="w-[198px]">
            <Link to="/" className="w-[118px] h-[24px] font-Roboto font-bold text-white mt-[15px]">Download App</Link>
            <div className="w-[190px] h-[24px] font-Roboto font-bold text-gray-500 text-xs  mt-[10px]">Save $3 with App New User Only</div>
            
        </div>
      </div>
      <div className="w-full lg:h-40 text-gray-500 flex items-center justify-center border-t-[0.1px] border-t-gray-900">
        @ Copyright 2025 Exclusive. All rights reserved.
      </div>


    </div>
  )
}

export default Footer