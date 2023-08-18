import React from 'react'
import { Link } from 'react-router-dom'
import TopNav from './common/TopNav'
import HeroImg from '../assets/hero-img.png'
import Apple from '../assets/apple.png'
import Google from '../assets/google.png'

const Hero = () => {
  return (
    <section style={{backgroundImage: 'url("/images/gradientshero-bg.png")'}} className='relative w-full bg-cover h-[100vh] lg:h-[110vh]'>
        <TopNav/>
        <div className='flex flex-col md:flex-row justify-center items-center h-[80%] px-[2rem] md:px-[4rem] lg:px-[6rem] md:pr-0 lg:pl-[10rem] relative'>
          <div  className='w-[90%] md:w-[50%] flex flex-col space-y-8 z-[9] '>

              <div>
                <h1 className='font-[mellow-reg] font-[700] text-[32px] md:text-[48px] lg:text-[56px] lg:leading-[72px] text-[#292A29]'>
                    Run your <span className='text-[#11453B]'>payroll</span><br/> <span className='text-[#B4A572]'>easily</span> in <span className='text-[#EA4E4B]'>seconds</span>
                </h1>
                <p className='font-[inter] font-[500] text-[14px] lg:w-[80%] text-[#515251]'>
                We’ve built an all-inclusive simple solution for individual and businesses to manage staff, pay salaries, bills, and relevant taxes all at once.
                </p>                
              </div>

              <Link to='/dashboard' > <button className='font-[inter] btn-primary w-[250px] py-3 text-[14px] rounded-3xl'>Start Using Free, Forever</button></Link>

              <div className='space-y-2'>
                <h2 className='text-[16px] font-[500] text-[inter] '>Download the Eazipay App</h2>

                <div>
                <div className='flex justify-start items-center space-x-3'>
                      <button className='flex bg-[#fff] p-1 justify-content items-center md:p-3 rounded-2xl space-x-2 w-[200px] md:w-[185px]'>
                        <img className=' h-[35px] md:h-[45px] w-[35px] md:w-[45px]' src={Apple} alt="" />
                        <div className='text-left'>
                          <small className='font-[500] text-[10px] md:text-[12px] text-[inter]'>Download on the</small>
                          <h2 className='text-[inter] font-[700] text-[12px] md:text-[14px] '>Appstore</h2>
                        </div>
                      </button>
                      <button className='flex bg-[#fff] p-1 justify-content items-center md:p-3 rounded-2xl space-x-2 w-[200px] md:w-[185px]'>
                        <img className=' h-[35px] md:h-[45px] w-[35px] md:w-[45px]' src={Google} alt="" />
                        <div  className='text-left'>
                          <small className='font-[500] text-[10px] md:text-[12px] text-[inter]'>Get on</small>
                          <h2 className='text-[inter] font-[700] text-[12px] md:text-[14px]'>Google Play</h2>
                        </div>
                      </button>
                    </div>
                </div>
              </div>
          </div>
          <div className='md:w-[60%] absolute md:relative opacity-5 md:opacity-[1]'>
            <img src={HeroImg} alt="" />
          </div>          
        </div>

    </section>
  )
}

export default Hero
