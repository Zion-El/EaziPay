import React from 'react'

const HeaderText = ({title, desc}) => {
  return (
    <div className='text-center'>
        <h1 className='font-[mellow-reg] text-[#11453B] font-[700] text-[28px] md:text-[40px] lg:text-[60px]'>{title}</h1>
        <p className='font-[inter] text-[12px] md:text-[16px] lg:text-[20px] font-[400] leading-6'>{desc}</p>
    </div>
  )
}

export default HeaderText
