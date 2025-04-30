import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Cart = () => {
  return (
    <>
      <Header />
      
      {/* Cart Container */}
      <div className="cart_container flex flex-col mb-[50px] max-w-full h-auto lg:mx-[100px] md:mx-[30px] sm:mx-[5px]">
        
        
        <div className="cart_items mt-[30px]">
          <span className="text-gray-600">Home / Cart</span>
          <div className="flex w-full h-[52px] items-center justify-between px-6 mt-[30px] shadow-md rounded-md bg-gray-100 font-semibold">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>
          </div>

        {/* Cart items goes here */}
        <div className="flex w-full h-[52px] items-center justify-between px-6 mt-[30px] shadow-md rounded-md bg-gray-100 font-semibold">
            <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
          </div>


          </div>


        

        {/* Checkout Section */}
        <div className="checkout flex flex-wrap justify-between h-auto max-w-full mx-[100px] gap-[300px] mt-[100px] mb-[80px]">
          
         
          <div className=" coupon flex items-start flex-1">
            <input 
              type="text" 
              className="border border-black p-2 focus:border-blue-500 rounded-md w-[200px]" 
              placeholder="Coupon Code"
            />
            <button className="text-white bg-red-500 py-2 px-4 ml-2 text-md rounded-md">Apply Coupon</button>
          </div>

         
          <div className="flex flex-col border border-black p-4 rounded-md flex-1 max-w-full w-full bg-gray-50 px-4">
            <span className="font-semibold">Cart Total</span>

            <div className='flex justify-between my-2'>
              <span>Subtotal :</span>
              <span>$1750</span>
              

            </div>
            <hr />

            <div className='flex justify-between my-2'>
              <span>Shipping:</span>
              <span>Free</span>
            </div>

            <hr />

            <div className='flex justify-between my-2'>
              <span>Total:</span>
              <span>$1750</span>
            </div>

            <button className="text-white bg-red-500 mt-4 mx-auto md:mx-8 lg:mx-16 py-2 px-4 ml-2 text-md rounded-md">Process to Checkout</button>
          </div>

        </div>

     

      <Footer />
    </>
  )
}

export default Cart
