import React from 'react'
import SearchIcon from '../dash-assets/Magnifiersearch.png'
import { activity_stat } from './Data'
import { Bonus, Emp_Mgt, Payroll, Wallet } from '../../common/Activity'

const Recent = () => {
  return (
    <div className='space-y-6'>
      <h2 className='font-[500] text-[inter] text-[24px] md:text-[32px] text-[#292A29] leading-[40px]'>Recent Activities</h2>

      <div className='w-full flex'>
        <div className='flex bg-transparent z-10 rounded-[16px] w-[90%] border border-[#B5B6B5] h-[40px]'>
            <input className='border-none outline-none w-full px-6 rounded-bl-[16px] rounded-tl-[16px]' placeholder='Search Employee' type="text" name="" id="" />
            <button className='bg-[#D9EBCD] border flex justify-center items-center  w-[102px] h-full rounded-tr-[16px] rounded-br-[16px]'><img src={SearchIcon} alt="" /></button>
        </div>
        <div></div>
      </div>

      <div className='bg-[#F2F1F180] bg-opacity-70 rounded-[20px] p-1 py-3 md:p-3 h-[550px] w-full overflow-y-auto'>
        {
            activity_stat.map((item, index)=>{
                return(
                    <div key={index} className='mb-6'>
                        <h2 className="text-[inter] text-[16px] font-[500] text-[#515251] mb-4 ">{item.date}</h2>
                        <div className='space-y-4'>
                            {
                                item.transaction.map((obj, index)=>{
                                    return(
                                        <div key={index}>
                                            {
                                                obj.cat === 'PAYROLL'? 
                                                    <Payroll
                                                        cat={obj.cat}
                                                        f_name={obj.full_name}
                                                        time={obj.time}
                                                        activity={obj.activity}
                                                        employee={obj.employee}
                                                    />
                                                    : 
                                                    obj.cat === 'BONUS'? 
                                                    <Bonus
                                                        cat={obj.cat}
                                                        f_name={obj.full_name}
                                                        activity={obj.activity}
                                                        b_name={obj.bonus_name}
                                                    />
                                                    : 
                                                    obj.cat === 'WALLET'? 
                                                    <Wallet
                                                        cat={obj.cat}
                                                        f_name={obj.full_name}
                                                        time={obj.time}
                                                        activity={obj.activity}
                                                        amount={obj.amount}
                                                    />
                                                    : 
                                                    <Emp_Mgt
                                                        cat={obj.cat}
                                                        f_name={obj.full_name}
                                                        time={obj.time}
                                                        activity={obj.activity}
                                                        employee={obj.employee}
                                                    />
                                                }                                      
                                        </div>
                                    )
                                })
                            }                            
                        </div>

                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Recent
