import React from 'react'

function Footer() {
  return (
    <div className='w-full lg:h-[296px] md:h-[50px] bg-black flex flex-col items-center justify-center mt-[440px]'>
      <div className="hidden lg:w-[1170px] lg:h-[236px] lg:flex flex-row lg:gap-[87px] mt-[15px] mb-[5px] mx-[135px]">
        <div className="w-[217px] flex flex-col gap-24px">
            <div className="w-[118px] h-[24px] font-Roboto text-white">Exclusive</div>
            <div className="w-[101px] h-[28px] font-Roboto text-white mt-[10px]">Subscribe</div>
            <div className="w-[206px] h-[24px] font-Roboto text-white">Get 10% off your first order</div>
            <input className="w-[217px] h-[48px]" type="text" placeholder='Enter your email' />
        </div>
        <div className="w-[175px]"></div>
        <div className="w-[123px]"></div>
        <div className="w-[109px]"></div>
        <div className="w-[198px]"></div>
      </div>
      <div className="w-full lg:h-40 "></div>


    </div>
  )
}

export default Footer