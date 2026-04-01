import React from 'react';

const Stats = () => {
    return (
        <div className='bg-gradient-to-r from-blue-800 to-purple-600 flex justify-center items-center gap-28'>

            <div className='space-y-4 p-10'>
                <h1 className='text-white text-6xl font-extrabold'>50K+</h1>
                <p className='text-white text-xl'>Active Users</p>
            </div>

            <span className='bg-white h-20 w-0.5'></span>

            <div className='space-y-4 p-10'>
                <h1 className='text-white text-6xl font-extrabold'>200+</h1>
                <p className='text-white'>Premium Tools</p>
            </div>

            <span className='bg-white h-20 w-0.5'></span>

            <div className='space-y-4 p-10'>
                <h1 className='text-white text-6xl font-extrabold'>4.9</h1>
                <p className='text-white'>Rating</p>
            </div>
        </div>
    );
};

export default Stats;