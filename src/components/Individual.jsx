import React, { useState } from 'react'
import HeaderText from './common/HeaderText'
import Pattern from '../assets/indi-pattern.png'

const Individual = () => {

  const [isMouseOvercard1, setIsMouseOvercard1] = useState(false);
  const [isMouseOvercard2, setIsMouseOvercard2] = useState(false);

  const handleMouseEntercard1 = () => {
    setIsMouseOvercard1(true);
  };
  const handleMouseLeavecard1 = () => {
    setIsMouseOvercard1(false);
  };
  const handleMouseEntercard2 = () => {
    setIsMouseOvercard2(true);
  };
  const handleMouseLeavecard2 = () => {
    setIsMouseOvercard2(false);
  };

  const card_class = 'individual-card flex flex-col items-start  px-4 lg:px-12  pt-6 lg:pt-12 lg:absolute '

  return (
    <section style={{backgroundImage: 'url("/images/Eazi Wave.png")'}} className=' w-full relative bg-cover bg-center mt-[-10vh] flex flex-col justify-center items-center lg:h-[100vh]  space-y-14'>
        <img className='w-full h-full absolute top-0 left-0' src={Pattern} alt="" />
        <HeaderText title='For Individuals and Businesses' desc="Join 200+ businesses using Eazipay's easy solution." />

        <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row w-[90%] lg:w-[70%] relative lg:h-[250px]'>
          <div className={`${card_class} top-0 left-0 z-0`} onMouseEnter={handleMouseEntercard1} onMouseLeave={handleMouseLeavecard1}>
            <div className='overlay'></div>
            <h2 className='text-[#fff] font-[inter] text-[16px] lg:text-[20px] font-[700]'>Tamper-proof Payroll for LIfe</h2>

            <p className='text-[#fff] font-[inter] text-[12px] lg:text-[14px] font-[400]'>
              Your staff payroll history is kept in one place forever.
            </p>
            <p className='text-[#fff] font-[inter] text-[12px] lg:text-[14px] font-[400]'>
              No more excel sheet or manual records.
            </p>
            <p className='text-[#fff] font-[inter] text-[12px] lg:text-[14px] font-[400]'>
              Download your payroll history anytime you need it.
            </p>

          </div>
          <div className={isMouseOvercard1 ? `${card_class} top-0 lg:-translate-x-[-80%]`: isMouseOvercard2? `${card_class} top-0 lg:-translate-x-[-20%]`: `${card_class} top-0 lg:-translate-x-[-50%]`} onMouseEnter={handleMouseEntercard2} onMouseLeave={handleMouseLeavecard2} >
          <div className='overlay'></div>
            <h2 className='text-[#fff] font-[inter] text-[16px] lg:text-[20px] font-[700]'>All Payroll, Anytime Anywhere</h2>

            <p className='text-[#fff] font-[inter] text-[12px] lg:text-[14px] font-[400]'>
            Wherever you are Eazipay has got you covered on ALL your Payroll tasks.
            </p>
            <p className='text-[#fff] font-[inter] text-[12px] lg:text-[14px] font-[400]'>
            Whether it is Taxes, Pension insurances HMOs, trustfunds, Eazipay handle all your compliamces in one place and easily, in seconds!
            </p>

          </div>

          <div className={isMouseOvercard2? `${card_class} top-0 right-0 -translate-x-[-3%]`: `${card_class} top-0 right-0`}>
          <div className='overlay'></div>
            <h2 className='text-[#fff] font-[inter] text-[16px] lg:text-[20px] font-[700]'>Tamper-proof Payroll for LIfe</h2>

            <p className='text-[#fff] font-[inter] text-[12px] lg:text-[14px] font-[400]'>
            Never again wil you spend more than 2 minutes on payroll.
Just click on your staff annd bulk-pay them at once.
Payment is done permanently.
            </p>

          </div>
        </div>

        <p className='text-center w-[90%] md:w-[70%] lg:w-[40%] text-[14px] text-[inter]'>We are happy to answer your queries. Please, reach us at <span className='text-[#EA4E4B]'>hello@myeazipay.com</span> and expect our response shortly after.</p>
    </section>
  )
}

export default Individual
