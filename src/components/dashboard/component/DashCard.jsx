import React from 'react'

const DashCard = ({icon, value, color}) => {
  return (
    <button className='bg-[#fff] flex md:flex-col justify-start items-center dashCard'>
      <div className={`bg-[${color}] w-[40px] h-[40px] flex justify-center items-center rounded-xl`}>
        <img src={icon} alt="" />
      </div>

      <p className='text-[inter] text-[12px]'>
        {value}
      </p>

    </button>
  )
}

export default DashCard
