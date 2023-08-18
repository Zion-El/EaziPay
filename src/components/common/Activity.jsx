


export const Payroll = ({date, cat, time, f_name, activity, employee}) =>{

    return(
        <div className="">
            <div className="w-full activity_card p-2 lg:pl-10 flex flex-col justify-between">
                <p className='cat_text text-[inter] text-[12px] text-[#8D8E8D]'>{cat}</p>
                <div className="grid-container">
                    <div className="flex justify-start items-center space-x-2">
                        <div className="hidden md:flex rounded-full bg-[#01AA8C]  justify-center items-center text-[Roboto] text-[12px] lg:text-[14px] h-[40px] w-[40px] text-[#fff]">{f_name.split(" ").map(item => item.charAt(0)).join("")}</div>
                        <p className='cat_text text-[inter] text-[10px] md:text-[12px] lg:text-[14px] font-[500] text-[#515251]'>{f_name}</p>
                    </div>
                    <div>
                        <p className='cat_text text-[inter] text-[10px] md:text-[12px] mb-3 text-[#8D8E8D]'>ACTIVITY</p>
                        <p className='cat_text text-[inter] text-[10px] md:text-[12px] lg:text-[14px] font-[500] text-[#515251]'>{activity}</p>
                        
                    </div>
                    <div className="hidden md:block">
                        <p className='cat_text text-[inter] text-[10px] md:text-[12px] mb-3 text-[#8D8E8D]'>EMPLOYEE</p>
                        <p className='cat_text text-[inter] text-[10px] md:text-[12px] lg:text-[14px] font-[500] text-[#515251]'>{employee}</p>
                        
                    </div>
                    <div>
                        <p className='cat_text text-[inter] text-[10px] md:text-[12px] mb-3 text-[#8D8E8D]'>TIME</p>
                        <p className='cat_text text-[inter] text-[10px] md:text-[12px] lg:text-[14px] font-[500] text-[#515251]'>{time}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Wallet = ({ cat, time, f_name, activity, amount}) =>{

    return(
        <div className="">
            <div className="w-full activity_card p-2 lg:pl-10 flex flex-col justify-between">
                <p className='cat_text text-[inter] text-[12px] text-[#8D8E8D]'>{cat}</p>
                <div className="grid-container">
                    <div className="flex justify-start items-center space-x-2">
                        <div className="hidden md:flex rounded-full bg-[#01AA8C]  justify-center items-center text-[Roboto] text-[12px] lg:text-[14px] h-[40px] w-[40px] text-[#fff]">{f_name.split(" ").map(item => item.charAt(0)).join("")}</div>
                        <p className='cat_text text-[inter] text-[10px] md:text-[10px] md:text-[12px] lg:text-[14px] font-[500] text-[#515251]'>{f_name}</p>
                    </div>
                    <div>
                        <p className='cat_text text-[inter] text-[10px] md:text-[12px] mb-3 text-[#8D8E8D]'>ACTIVITY</p>
                        <p className='cat_text text-[inter] text-[10px] md:text-[12px] lg:text-[14px] font-[500] text-[#515251]'>{activity}</p>
                        
                    </div>
                    <div className="hidden md:block">
                        <p className='cat_text text-[inter] text-[10px] md:text-[12px] mb-3 text-[#8D8E8D]'>AMOUNT</p>
                        <p className='cat_text text-[inter] text-[10px] md:text-[12px] lg:text-[14px] font-[500] text-[#EA4E4B]'>{amount}</p>
                        
                    </div>
                    <div>
                        <p className='cat_text text-[inter] text-[10px] md:text-[12px] mb-3 text-[#8D8E8D]'>TIME</p>
                        <p className='cat_text text-[inter] text-[10px] md:text-[12px] lg:text-[14px] font-[500] text-[#515251]'>{time}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export const Emp_Mgt = ({date, cat, time, f_name, activity, employee}) =>{

    return(
        <div className="">
            <div className="w-full activity_card p-2 lg:pl-10 flex flex-col justify-between">
                <p className='cat_text text-[inter] text-[12px] text-[#8D8E8D]'>{cat}</p>
                <div className="grid-container">
                    <div className="flex justify-start items-center space-x-2">
                        <div className="hidden md:flex rounded-full bg-[#01AA8C]  justify-center items-center text-[Roboto] text-[12px] lg:text-[14px] h-[40px] w-[40px] text-[#fff]">{f_name.split(" ").map(item => item.charAt(0)).join("")}</div>
                        <p className='cat_text text-[inter] text-[10px] md:text-[12px] lg:text-[14px] font-[500] text-[#515251]'>{f_name}</p>
                    </div>
                    <div>
                        <p className='cat_text text-[inter] text-[10px] md:text-[12px] mb-3 text-[#8D8E8D]'>ACTIVITY</p>
                        <p className='cat_text text-[inter] text-[10px] md:text-[12px] lg:text-[14px] font-[500] text-[#515251]'>{activity}</p>
                        
                    </div>
                    <div>
                        <p className='cat_text text-[inter] text-[10px] md:text-[12px] mb-3 text-[#8D8E8D]'>EMPLOYEE</p>
                        <p className='cat_text text-[inter] text-[10px] md:text-[12px] lg:text-[14px] font-[500] text-[#515251]'>{employee}</p>
                        
                    </div>
                    <div className="hidden md:block">                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Bonus = ({date, cat, time, f_name, activity, b_name}) =>{

    return(
        <div className="">
            <div className="w-full activity_card p-2 lg:pl-10 flex flex-col justify-between">
                <p className='cat_text text-[inter] text-[12px] text-[#8D8E8D]'>{cat}</p>
                <div className="grid-container">
                    <div className="flex justify-start items-center space-x-2">
                        <div className="hidden md:flex rounded-full bg-[#01AA8C]  justify-center items-center text-[Roboto] text-[12px] lg:text-[14px] h-[40px] w-[40px] text-[#fff]">{f_name.split(" ").map(item => item.charAt(0)).join("")}</div>
                        <p className='cat_text text-[inter] text-[12px] lg:text-[14px] font-[500] text-[#515251]'>{f_name}</p>
                    </div>
                    <div>
                        <p className='cat_text text-[inter] text-[12px] mb-3 text-[#8D8E8D]'>ACTIVITY</p>
                        <p className='cat_text text-[inter] text-[12px] lg:text-[14px] font-[500] text-[#515251]'>{activity}</p>
                        
                    </div>
                    <div>
                        <p className='cat_text text-[inter] text-[12px] mb-3 text-[#8D8E8D]'>BONUS NAME</p>
                        <p className='cat_text text-[inter] text-[12px] lg:text-[14px] font-[500] text-[#515251]'>{b_name}</p>
                        
                    </div>
                    <div>                        
                    </div>
                </div>
            </div>
        </div>
    )
}