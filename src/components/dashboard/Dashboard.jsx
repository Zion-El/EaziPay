import React, { useState } from 'react'
import Drawer from './component/Drawer'
import Wallet from './dash-assets/walletBG.png'
import { card_data } from './component/Data'
import DashCard from './component/DashCard'
import Recent from './component/Recent'
import { CalendarIcon, SmallCloseIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import LineChart from './component/LineChart'

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import React, { useState } from 'react'
import NavImg from './dash-assets/navImg.png'
import { HamburgerIcon } from '@chakra-ui/icons';
import { Progress } from '@chakra-ui/react'

const Dashboard = () => {
    const [hide, setHide] = useState(false)
    // const [value, setValue] = useState('2022-04-17')

    const male_count = 32
    const female_count = 32
    const total = male_count + female_count
    const percent = (male_count/total) *100

    const [toggle, setToggle] = useState(true)

  return (
    <section className='flex bg-[#F2F1F180] bg-opacity-1 '>
        <div className={toggle ? `nav hidden lg:block w-[20%] h-full fixed z-[999] overflow-auto `: `block nav w-[15rem] transition-all  h-full fixed z-[999] overflow-auto`}>
            <Drawer/>

        </div>
        <div className='w-full lg:w-[80%] lg:ml-[20%] relative'>
            <div>

            </div>
            <div className='fixed right-0 w-full lg:w-[80%] z-[999]'>
                    {/* <Nav/>                 */}

                <div className='w-full sm:h-[60px] lg:h-[80px] bg-[#fff] flex px-3 md:px-10 items-center justify-between'>
                    <div className='lg:hidden'>
                        <button onClick={()=>setToggle(!toggle)}>
                            {!toggle? <SmallCloseIcon/>:<HamburgerIcon color="black"/>}
                        </button>
                    
                    </div>
                <img></img>
                <div className='flex sm:space-x-4 lg:space-x-12 justify-center items-center '>
                    <div className='relative'>
                        <NotificationsNoneOutlinedIcon/>
                        <div className='h-2 w-2 bg-red-500 rounded-full absolute top-1 right-1'></div>
                    </div>
                    <div className='flex justify-center items-center space-x-2 '>
                        <img className='sm:w-[50px] sm:h-[50px]' src={NavImg} alt="nav" />
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
            </div>

            <div className='px-6 sm-8 lg:px-14 py-10 w-full space-y-10'>
                <div className='hidden sm:block pt-10 lg:pt-20'>
                    <h2 className='font-[700] text-[inter] sm:text-3xl lg:text-[32px] text-[#292A29] leading-[40px]'>Welcome  Abasiama</h2>
                    <p className='text-[#515251] font-[500] text-[inter] sm:text-sm lg:text-[14px]'>Pay and manage your employee in minutes</p>
                </div>

                {/* WALLET BALANCE CONTAINER */}
                <div className='flex space-x-6 w-full h-full' >
                    <div className='w-full md:w-[75%] lg:w-[80%] space-y-6 '>
                        <div className='bg-[#11453B] isolate relative w-full h-[130px] rounded-[24px] px-4 md:px-6 ' >
                            <div className='absolute top-0 left-0 w-full h-full z-[-1]'>
                                <img className='w-full h-full' src={Wallet} alt="" />
                            </div>

                            <div className='h-full w-full flex flex-col items-start justify-center z-[10]'>
                                <p  className='text-[#D9EBCD] text-[inter] text-[14px] font-[500]'>Wallet Balance</p>
                                <div className='flex flex-col space-y-2 md:flex-row w-full justify-between items-center'>
                                    <div className='flex space-x-2 justify-center items-center'>
                                        <h2 className='text-[24px] md:text-[32px] font-[700] text-[inter] text-white '>{hide? '****' :'N12,560,078.00'}</h2>
                                        <button onClick={()=>setHide(!hide)}>{hide? <ViewOffIcon color='#D9EBCD'/> : <ViewIcon color='#D9EBCD'/> }</button>
                                    </div>
                                    <button className='fund-btn text-[inter] text-[#11453B] text-[14px]'>Fund Wallet</button>
                                </div>

                            </div>



                        </div>
                        <div className='flex flex-wrap md:flex-nowrap w-full justify-between'>
                            {
                                card_data.map((item, index) => <DashCard key={index} color={item.color} icon={item.icon} value={item.value}/>)
                            }
                        </div>
                    </div>
                    <div className='hidden md:block w-[25%] h-full'>
                        <div className='w-full h-[33vh] rounded-2xl bg-white'>
                            <div className='w-full h-[15%] bg-[#D9EBCD] rounded-tr-[16px] rounded-tl-[16px] flex justify-center items-center '>
                                <p className='font-[500] text-[16px] text-[#515251]'>Next Payroll</p>
                            </div>

                            <div className='p-3 h-[40%] border-b border-b-[#E7E8E7] flex justify-center items-center flex-col'>
                                <div className='flex space-x-3'>
                                    <button><CalendarIcon color='#515251'/></button> <p className='text-[inter] text-[#515251] text-[12px]'>Friday</p>
                                </div>
                                
                                <p className='font-[700] text-[18px] text-[inter] text-[#515251]'>9/11/2023</p>
                            </div>
                            <div className='p-3 h-[40%] border-t border-t-[#E7E8E7]'>
                                <h2 className='text-[#515251] font-[500] text-[inter] text-[16px]'>Top Employee</h2>
                                <h1 className='text-[#292A29] font-[700] text-[inter] text-[32]'>{total}</h1>
                                <Progress colorScheme='green'  size='sm' value={percent} />
                                <div className='flex justify-between items-center'>
                                    <p className='text-[#8D8E8D] font[700] text-[10px]'>Male <br/> {male_count}</p>
                                    <p className='text-[#8D8E8D] font[700] text-[10px]'>Female <br/> {female_count}</p>

                                </div>
                            </div>

                            <div>
                            {/* <LocalizationProvider dateAdapter={DateFnsAdapter}>
                            <DatePicker label="Uncontrolled picker" defaultValue={dayjs('2022-04-17')} />
                                <DatePicker
                                label="Controlled picker"
                                value={value}
                                onChange={(newValue) => setValue(newValue)}
                                />
                            </LocalizationProvider> */}
                            </div>

                            

                        </div>
                    </div>
                </div>
                <div className='overflow-x-scroll'>
                    <LineChart/>
                </div>
                <div className='block'>
                    <Recent/>
                </div>



            </div>
        </div>
    </section>
  )
}

export default Dashboard
