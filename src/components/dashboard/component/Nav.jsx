import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import React, { useState } from 'react'
import NavImg from '../dash-assets/navImg.png'
import { HamburgerIcon } from '@chakra-ui/icons';

const Nav = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div className='w-full sm:h-[60px] lg:h-[80px] bg-[#fff] flex px-3 md:px-10 items-center justify-between'>
        <div className='md:hidden'>
          <HamburgerIcon onClick={()=>setToggle(!toggle)} color="black"/>
        </div>
      <img></img>
      <div className='flex sm:space-x-4 lg:space-x-12 justify-center items-center '>
        <div className='relative'>
            <NotificationsNoneOutlinedIcon/>
            <div className='h-2 w-2 bg-red-500 rounded-full absolute top-1 right-1'></div>
        </div>
        <div className='flex justify-center items-center space-x-2 '>
            <img className='sm:w-[50px] sm:h-[50px]' src={NavImg} alt="" />
            <div className='w-[180px] hidden lg:block'>
              <h2 className='text-[16px] font-[700] text-[#2B2B2B] text-[inter]'>Kalu Abasiama</h2>
              <div className='flex items-center justify-between'>
                <p className='text-[#898989] text-[14px] font-[500]'>Admin</p>
                <NavigateNextIcon color='#898989'/>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
