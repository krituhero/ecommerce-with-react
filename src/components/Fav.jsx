import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Fav = () => {
  return (
    <>
    <Header />
    <div className="favourite mt-4 mb-[400px] m-2 flex flex-col items-center justify-center">
      <h1>English to Nepali Date converter</h1>
      <div className='flex flex-row mt-4 p-2 gap-4'>
        <div className=''>
          
          <select name="english_date" id="eng" className='w-[100px]'>
            
          </select>
          </div>
        <div className='bg-red-200'>nepali</div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Fav