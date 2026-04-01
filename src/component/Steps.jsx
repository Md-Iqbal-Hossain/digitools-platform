import React from 'react';
import userImg from '../assets/user.png'
import packageImg from '../assets/package.png'
import rocketImg from '../assets/rocket.png'

const Steps = () => {
    return (
        <div className='bg-[#F9FAFC]'>
            <div className='max-w-6xl mx-auto w-full py-26'>
                <h1 className='text-5xl font-bold text-center'>Get Started in 3 Steps</h1>
                <p className='py-4 text-sm text-[#627382] text-center'>Start using premium digital tools in minutes, not hours.</p>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                    {/* Card 1 */}
                    <div className='relative shadow-lg rounded-lg overflow-hidden border border-gray-200 py-20 bg-white'>

                        <div className='absolute top-3 right-3 flex justify-center items-center h-8 w-8 rounded-full bg-violet-600'>
                            <p className='text-white font-semibold'>01</p>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <div className='rounded-full bg-violet-200 p-3'>
                                <img src={userImg} alt="" />
                            </div>
                            <h4 className='text-2xl font-semibold pt-3'>Create Account</h4>
                            <p className='text-sm text-[#627382] pt-3'>Sign up for free in seconds. No credit card</p>
                            <p className='text-sm text-[#627382]'>required to get started.</p>
                        </div>

                    </div>


                    {/* Card 2 */}
                    <div className='relative shadow-lg rounded-lg overflow-hidden border border-gray-200 py-20 flex flex-col justify-center items-center bg-white'>

                        <div className='absolute top-3 right-3 flex justify-center items-center h-8 w-8 rounded-full bg-violet-600'>
                            <p className='text-white font-semibold'>02</p>
                        </div>

                        <div className='rounded-full bg-violet-200 p-3'>
                            <img src={packageImg} alt="" />
                        </div>
                        <h4 className='text-2xl font-semibold pt-3'>Choose Products</h4>
                        <p className='text-sm text-[#627382] pt-3'>Browse our catalog and select the tools</p>
                        <p className='text-sm text-[#627382]'>that fit your needs.</p>

                    </div>

                    {/* Card 3 */}
                    <div className='relative shadow-lg rounded-lg overflow-hidden border border-gray-200 py-20 flex flex-col justify-center items-center bg-white'>

                        <div className='absolute top-3 right-3 flex justify-center items-center h-8 w-8 rounded-full bg-violet-600'>
                            <p className='text-white font-semibold'>03</p>
                        </div>

                        <div className='rounded-full bg-violet-200 p-3'>
                            <img src={rocketImg} alt="" />
                        </div>
                        <h4 className='text-2xl font-semibold pt-3'>Start Creating</h4>
                        <p className='text-sm text-[#627382] pt-3'>Download and start using your premium</p>
                        <p className='text-sm text-[#627382]'>tools immediately.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;