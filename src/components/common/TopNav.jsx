import React, {useState} from 'react'
import { navLink } from './navLinks'
import { Link } from 'react-router-dom'
import Logo from '../../assets/EAZIPAY LOGO NEW 1.png'
import { HamburgerIcon } from '@chakra-ui/icons';

const TopNav = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div className='md:w-full h-[60px] md:h-[80px] px-8 flex justify-between lg:justify-center items-center '>
      <div>
        <img className='h-[25px] w-[100px] md:h-[35px] md:w-[130px]'  src={Logo} alt="Logo" />
      </div>
      <div className='hidden lg:flex space-x-8 mr-[9rem] ml-[3.5rem] '>
        {
            navLink.map((item,index)=><Link className='text-[inter] text-[#515251] text-[14px] font-[500]' to={item.url}>{item.title}</Link>)
        }
      </div>

      <div className='hidden lg:flex space-x-4'>
        <Link to='/dashboard'><button className='nav-btn border border-[#11453B] text-[#11453B]'>Login</button></Link>
        <Link to='/register'><button className='nav-btn btn-primary text-[#11453B]'>Register</button></Link>
      </div>

      <div className='lg:hidden'>
          <HamburgerIcon onClick={()=>setToggle(!toggle)} color="black"/>
      </div>

        {
          toggle? 
          <div className='bg-[#11453B] absolute w-[80%] top-16 right-2 z-[9999] rounded-2xl'>
          <div className="overlay"></div>
          <div className='flex flex-col space-y-2 '>
            {
                navLink.map((item,index)=><Link key={index} className='w-full text-center text-[inter] py-2 text-[#fff]' to={item.url}>{item.title}</Link>)
            }
          </div>
  
          <div className='flex flex-col w-full space-y-2 bg-[#D9EBCD]'>
            <Link to='/#'><button className=' w-full font-[700] text-center py-2 text-[#11453B]'>Login</button></Link>
            <Link to='/#'><button className='  w-full font-[700] text-center py-2 text-[#11453B]'>Register</button></Link>
          </div>
        </div>
          : null
        }

    </div>
  )
}

export default TopNav
