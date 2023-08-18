import React, { useState } from 'react'
import Individual from './Individual'

const ContForm = () => {
    const [formState, setFormState] = useState('individual') 
  return (
    <section className='flex flex-col md:flex-row lg:px-[7rem] py-[6rem] justify-center items-center'>
        <div className='md:w-[50%] md:pl-10 md:space-y-6 text-center md:text-left mb-4'>
            <h1 className=' hidden lg:block font-[900]  font-[mellow-bold] leading-[50px] text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-[#11453B]'>Get an Exclusive <br/> Demo of Eazipay</h1>
            
            
            <h1 className='lg:hidden font-[900]  font-[mellow-bold] leading-[50px] text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-[#11453B]'>Get an Exclusive Demo of Eazipay</h1>
            
            
            <div className='w-[80%] md:w-[70%] mx-auto'>
                <p className='font-[inter] font-[400] text-[14px] lg:text-[20px] text-[#515251] leading-[24px]'>Our greatest priority is to put you and your business first. Let’s show you how we can help.</p>
            </div>
            
        </div>
        <div className='w-full md:w-[50%] px-3  lg:px-10'>
            <div className='bg-[#FFF] border border-[E7E8E7] shadow px-2 py-6 lg:p-6 rounded-[32px] space-y-6'>
                <div className='flex flex-col justify-center items-center space-y-4 '>
                    <h2 className='font-[700] text-[inter] text-[24px]'>First things first</h2>
                    <p className='font-[400] text-[aeonik] text-[14px] lg:w-[70%] text-center text-[#292A29]'>We want to serve you better. Tell us a bit about yourself or company</p>
                </div>
                <div className='flex gap-1 p-1 border border-[#515251] rounded-[12px] mb-6'>
                    <button className={formState=== 'individual'? 'btn-classic' :'btn-basic'} onClick={()=>setFormState('individual')}>Individual</button>
                    <button className={formState=== 'company'? 'btn-classic' :'btn-basic'} onClick={()=>setFormState('company')}>Company</button>
                </div>
                {
                    formState === 'individual' ? 
                    <form className='contact space-y-3 md:space-y-6' action="">
                        <input type="text" placeholder='First Name'/>
                        <input type="text" placeholder='Last Name'/>
                        <input type="email" placeholder='Email'/>
                        <input type="text" placeholder='Job Title'/>
                        <input type="text" placeholder='Company Site'/>
                        <button className='btn-primary w-full rounded-3xl h-[40px]'>Request Demo</button>
                    </form>
                    :

                    <form className='contact space-y-6' action="">
                        <input type="text" placeholder='Organization Name'/>
                        <input type="email" placeholder='Email'/>
                        <input type="text" placeholder='Job Title'/>
                        <input type="text" placeholder='Company Site'/>
                        <button className='btn-primary w-full rounded-3xl h-[40px]'>Request Demo</button>
                    </form>
                }
                
            </div>
        </div>

    </section>
  )
}

export default ContForm
