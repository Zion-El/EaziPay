import React from 'react'
import PImage from '../assets/payment-img.png'
import Pattern from '../assets/pay-pat.png'
import Grid from '../assets/payment-pattern.png'
import Apple from '../assets/apple.png'
import Google from '../assets/google.png'

const  Payment = () => {
  return (
    <section style={{backgroundImage: 'url("/images/payment-bg.png")'}} className='relative bg-cover bg-center flex mt-20 md:mt-0 flex-col h-[90vh] w-full'>
        <img className='w-full h-full absolute top-0 left-0' src={Pattern} alt="" />
        <img className='opacity-80 md:opacity-[1] absolute top-0 left-8 lg:left-[8rem]' src={Grid} alt="" />
        <div  className='w-full h-full flex justify-center items-center lg:px-[8rem]'>
          <div className='flex flex-col md:flex-row w-full px-8 lg:px-16'>
            {/* home beeper */}
            <div  className='relative bg-cover bg-center md:w-[50%] space-y-6 flex flex-col justify-center items-start'>

                <h1 className='hidden md:block font-[mellow-reg] font-[700] text-[46px] md:text-[56px] md:leading-[72px] text-[#292A29]'>Free forever <br/>for your <span className='text-[#EA4E4B]'>salary</span> <br/> <span className='text-[#EA4E4B]'>payment</span></h1>

                <h1 className='md:hidden text-center font-[mellow-reg] font-[700] text-[36px] md:text-[48px] md:leading-[72px] text-[#292A29]'>Free forever for your <span className='text-[#EA4E4B]'>salary</span> <span className='text-[#EA4E4B]'>payment</span></h1>

                <div className='w-full space-y-2'>
                <h2 className='text-[16px] font-[500] text-[inter] text-center md:text-left '>Subscribe to the Eazilife today</h2>
                  <div className='flex justify-start items-center space-x-3'>
                      <button className='flex bg-[#fff] p-1 justify-content items-center md:p-2 rounded-2xl space-x-2 w-[200px] md:w-[185px]'>
                        <img className=' h-[35px] md:h-[45px] w-[35px] md:w-[45px]' src={Apple} alt="" />
                        <div className='text-left'>
                          <small className='font-[500] text-[10px] md:text-[12px] text-[inter]'>Download on the</small>
                          <h2 className='text-[inter] font-[700] text-[12px] md:text-[14px] '>Appstore</h2>
                        </div>
                      </button>
                      <button className='flex bg-[#fff] p-1 justify-content items-center md:p-2 rounded-2xl space-x-2 w-[200px] md:w-[185px]'>
                        <img className=' h-[35px] md:h-[45px] w-[35px] md:w-[45px]' src={Google} alt="" />
                        <div  className='text-left'>
                          <small className='font-[500] text-[10px] md:text-[12px] text-[inter]'>Get on</small>
                          <h2 className='text-[inter] font-[700] text-[12px] md:text-[14px]'>Google Play</h2>
                        </div>
                      </button>
                    </div>
                </div>
                

            </div>

            <div className='w-full md:w-[50%] mt-16'>
              <img className='w-full' src={PImage} alt="" />
            </div>
          </div>
        </div>

    </section>
  )
}

export default Payment 
