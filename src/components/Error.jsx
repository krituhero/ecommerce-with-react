import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Error = () => {
  return (
    <>
    <Header />
    <div className="mx-[100px] cart_items mt-[30px]">
      <span className="text-gray-600">Home / Cart</span>
      <div className='my-[70px] flex flex-col items-center justify-center'>
        <div className='text-8xl font-semibold'>404 Not Found</div>
        <div className='pt-6 pb-12 text-md'>Your visited page not found. You may go home page.</div>
        <Link to='/'><button className="text-white bg-red-500 py-2 px-4 ml-2 text-md rounded-md">Back to Home page</button></Link>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Error