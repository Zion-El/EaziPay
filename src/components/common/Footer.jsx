import React from 'react'
import { Link } from 'react-router-dom'
import LogoDark from '../../assets/dark.png'
import Send from '../../assets/send.png'

const Footer = () => {
  return (
    <div className='bg-[#FFF] border border-t-[#EAEAEA] py-[2rem] px-2 md:px-[3rem] flex-col-reverse md:flex-row justify-between items-start md:space-x-[5rem] lg:space-x-[10rem] w-full'>
      <div className='space-y-4'>
        <img src={LogoDark} alt="" />
        <div className='hidden md:block'>
          <p className='text-[12px] lg:text-[16px] text-[inter] text-[#7C7C7C]'>Copyright © 2023 Eazipay. </p> 
          <p  className='text-[12px] lg:text-[16px] text-[inter] text-[#7C7C7C]'>All rights reserved</p>        
        </div>

        <div>

        </div>
      </div>

      <div className='footer-grid px-8 md:px-0'>
        <div className='space-y-5'>
          <h2 className='font-[500] text-[14px] lg:text-[20px] text-[inter] text-[#292A29]'>Product</h2>
          <div className='flex flex-col space-y-3'>
            <Link to='/' className='text-[12px] lg:text-[16px] text-[inter] text-[#7C7C7C]'>Indivdual</Link>
            <Link to='/' className='text-[12px] lg:text-[16px] text-[inter] text-[#7C7C7C]'>Business</Link>
            <Link to='/' className='text-[12px] lg:text-[16px] text-[inter] text-[#7C7C7C]'>Request Demo</Link>
            <Link to='/' className='text-[12px] lg:text-[16px] text-[inter] text-[#7C7C7C]'>Pricing</Link>
          </div>
          
        </div>
        <div className='space-y-5'>
          <h2 className='font-[500] text-[14px] lg:text-[20px] text-[inter] text-[#292A29]'>Legal</h2>
          <div className='flex flex-col space-y-3'>
            <Link to='/' className='text-[12px] lg:text-[16px] text-[inter] text-[#7C7C7C]'>Privacy Policy</Link>
            <Link to='/' className='text-[12px] lg:text-[16px] text-[inter] text-[#7C7C7C]'>Terms of Service</Link>

          </div>
          
        </div>
        <div className='space-y-5'>
          <h2 className='font-[500] text-[14px] lg:text-[20px] text-[inter] text-[#292A29]'>Resources</h2>
          <div className='flex flex-col space-y-3'>
            <Link to='/' className='text-[12px] lg:text-[16px] text-[inter] text-[#7C7C7C]'>FAQs</Link>
            <Link to='/' className='text-[12px] lg:text-[16px] text-[inter] text-[#7C7C7C]'>Blog</Link>
            <Link to='/' className='text-[12px] lg:text-[16px] text-[inter] text-[#7C7C7C]'>Career Demo</Link>
            <Link to='/' className='text-[12px] lg:text-[16px] text-[inter] text-[#7C7C7C]'>Customer Stories</Link>
          </div>
          
        </div>
        <div className='space-y-5'>
          <h2 className='font-[500] text-[14px] lg:text-[20px] text-[inter] text-[#292A29]'>Contact Us</h2>
          <div className='flex flex-col space-y-3'>
            <Link to='/' className='text-[12px] lg:text-[16px] text-[inter] text-[#7C7C7C]'>eazipay@gmail.com</Link>
            <Link to='/' className='text-[12px] lg:text-[16px] text-[inter] text-[#7C7C7C]'>+234 816 878 9518</Link>
            <div className='relative bg-[#F2F1F1] flex justify-center items-center h-[30px] md:h-[40px] rounded-2xl px-2 md:px-4 w-[120px] md:w-[200px] lg:w-[250px]'>
              <input className='outline-none border-none bg-transparent placeholder:text-[inter] placeholder:text-[12px] w-full' type="email" placeholder='Your email address' />

              <button type='submit'><img src={Send} alt="send btn" /></button>
            </div>
            
          </div>
          
        </div>
      </div>

      <div className='md:hidden flex mt-6 justify-between border border-t-[#7C7C7C] py-3 px-6'>
          <p className='text-[12px] lg:text-[16px] text-[inter] text-[#7C7C7C]'>Copyright © 2023 Eazipay. </p> 
          <p  className='text-[12px] lg:text-[16px] text-[inter] text-[#7C7C7C]'>All rights reserved</p>        
        </div>
    </div>
  )
}

export default Footer
