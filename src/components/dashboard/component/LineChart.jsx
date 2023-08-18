import React from 'react';
import ReactApexChart from 'react-apexcharts';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const LineChart = () => {
  const chartOptions = {
    chart: {
      id: 'multi-line',
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
  };

  const chartSeries = [
    {
      name: 'Series 1',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 150, 200, 230],
    },
    {
      name: 'Series 2',
      data: [20, 28, 32, 45, 55, 70, 80, 95, 110, 130, 170, 210],
    },
  ];

  return (
    <div className='bg-white px-2 py-4 lg:p-8  rounded-2xl gradient relative'>
      <div className='flex justify-between'>
        <div className='hidden md:block'>
            <p className='text-[14px] font-[500] text-[inter] lg:text-[16px] text-[#515251]'>Inflow</p>
            <h2 className='font-[700] text-[inter] text-[20px] lg:text-[28px] text-[#219653]'>N1,567,552</h2>
        </div>
        <div className='hidden md:block'>
            <p className='text-[14px] font-[500] text-[inter] lg:text-[16px] text-[#515251]'>Outflow</p>
            <h2 className='font-[700] text-[inter] text-[20px] lg:text-[28px] text-[#EF4444]'>N1,567,552</h2>
        </div>
        <div>
            <button className='text-[#11453B] text-[inter] text-[12px]'>Inflow/Outflow <KeyboardArrowDownOutlinedIcon/> </button>
        </div>
      </div>
      <div className=' lg:px-14 pb-6'>
        <ReactApexChart options={chartOptions} series={chartSeries} type="line" height={350} />
      </div>
        <button className='absolute right-8 bottom-8 md:py-[10px] px-2 md:px-4 bg-[#11453B] text-[10px] text-white'>
            2022
        </button>
      
    </div>
  );
};

export default LineChart;
