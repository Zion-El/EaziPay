import React from 'react'
import HeaderText from './common/HeaderText'
import Phone from '../assets/phone.gif'
import Flow1 from '../assets/Mask group3.svg'
import Flow2 from '../assets/flow2.png'
import BG from '../assets/BG.png'

const  HowItWorks = () => {
  return (
    <section className='flex flex-col h-[80vh] md:h-[110vh] w-full mt-10'>
        <HeaderText title='How Eazipay Works' desc="Get started in 3 simple steps." />

        <div  className='w-full h-full flex justify-center items-center '>
          <div className='flex w-full md:px-6 lg:px-16 h-full'>
            {/* home beeper */}
            <div  className='relative my-[6rem] bg-cover bg-center md:w-[60%] lg:w-[50%]  flex justify-center items-center'>

                <img className='w-full h-full md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]'  src={BG} alt="" />
                
                <div className='absolute'>
                  <img className='rounded-[3rem] h-[500px] w-[270px] lg:h-[600px] lg:w-[320px]' src={Phone} alt="" />
                </div>

            </div>

            <div className='hidden md:flex justify-center items-center h-[80%] lg:w-[50%]'>
              <div>
                <div className='relative'>
                      <div className='bg-[#11453B] text-[#F2F1F1] rounded-xl lg:rounded-2xl w-[40px] h-[40px] lg:w-[55px] lg:h-[55px] left-12 top-[-30px] absolute flex justify-center items-center'>
                        <p className='text-[24px] font-[700] text-[inter]'>1</p>
                      </div>

                                    
                  <div className='flex relative'>
                    <img className='h-[140px] lg:h-[180px]' src={Flow1} alt="" />
                    <div className='absolute p-8 pt-12'>
                    <div className='mx-auto my-auto'>
                        <h2 className='text-[inter] text-[#515251] font-[700] text-[14px]'>Create your free account</h2>
                        <p className='text-[inter] text-[#515251] font-[500] text-[12px]'>Click here to set up your Eazipay account.</p>
                      </div>

                    </div>
                  </div>                
                </div>
                <div className='relative'>
                      <div className='text-[#11453B] bg-[#F2F1F1] rounded-xl lg:rounded-2xl w-[40px] h-[40px] lg:w-[55px] lg:h-[55px] left-12 top-[-30px] absolute flex justify-center items-center'>
                        <p className='text-[24px] font-[700] text-[inter]'>2</p>
                      </div>

                                    
                  <div className='flex relative w-full'>

                    <div className='absolute p-8 pt-12'>
                    <div className='mx-auto my-auto'>
                        <h2 className='text-[inter] text-[#515251] font-[700] text-[14px]'>Create your free account</h2>
                        <p className='text-[inter] text-[#515251] font-[500] text-[14px]'>Click here to set up your Eazipay account.</p>
                      </div>
                    </div>
                    <img className='h-[140px] lg:h-[180px] ml-[100px]' src={Flow2} alt="" />
                  </div>                
                </div>
                <div className='relative'>
                      <div className='bg-[#F2F1F1] text-[#11453B] rounded-xl lg:rounded-2xl w-[40px] h-[40px] lg:w-[55px] lg:h-[55px] left-12 top-[-30px] absolute flex justify-center items-center'>
                        <p className='text-[24px] font-[700] text-[inter]'>3</p>
                      </div>

                                    
                  <div className='flex relative'>
                    {/* <img src={Flow1} alt="" /> */}
                    <div className='absolute p-8 pt-12'>
                    <div className='mx-auto my-auto'>
                        <h2 className='text-[inter] text-[#515251] font-[700] text-[14px]'>Create your free account</h2>
                        <p className='text-[inter] text-[#515251] font-[500] text-[14px]'>Click here to set up your Eazipay account.</p>
                      </div>

                    </div>
                  </div>                
                </div>                
              </div>



              
            </div>
          </div>
        </div>

    </section>
  )
}

export default HowItWorks 
