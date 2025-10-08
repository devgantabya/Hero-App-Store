import React from 'react';

const Statistics = () => {
    return (
        <div className='text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] p-4 md:p-20 text-center space-y-10 md:space-y-15'>
            <h1 className='font-bold text-[34px] md:text-5xl pt-4 md:pt-0 leading-12'>Trusted by Millions, Built for You</h1>
            <div className='flex flex-col md:flex-row justify-center gap-5 items-center space-y-4'>
                <div className='space-y-3 md:space-y-4 border rounded-2xl md:rounded-0 p-10 md:p-0 bg-gray-900 md:bg-transparent md:border-0 w-full'>
                    <p className='text-base'>Total Downloads</p>
                    <h2 className='text-5xl md:text-[64px] font-extrabold'>29.6M</h2>
                    <p className='text-base'>21% more than last month</p>
                </div>
                <div className='space-y-3 md:space-y-4 border rounded-2xl md:rounded-0 p-10 md:p-0 bg-gray-900 md:bg-transparent md:border-0 w-full'>
                    <p className='text-base'>Total Reviews</p>
                    <h2 className='text-5xl md:text-[64px] font-extrabold'>906K</h2>
                    <p className='text-base'>46% more than last month</p>
                </div>
                <div className='mb-8 md:mb-0 space-y-3 md:space-y-4 border rounded-2xl md:rounded-0 p-10 md:p-0 bg-gray-900 md:bg-transparent md:border-0 w-full'>
                    <p className='text-base'>Active Apps</p>
                    <h2 className='text-5xl md:text-[64px] font-extrabold'>132+</h2>
                    <p className='text-base'>31 more will Launch</p>
                </div>
            </div>

        </div>
    );
};

export default Statistics;