import React from 'react';
import checkImg from '../assets/Check.png';

const Pricing = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto w-full py-26'>
                <h1 className='text-5xl font-bold text-center'>Simple, Transparent Pricing</h1>
                <p className='py-4 text-sm text-[#627382] text-center'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4'>
                    {/* Card 1 */}
                    <div className='relative shadow-lg rounded-lg overflow-hidden border border-gray-200 py-4 bg-white'>

                        <div className='flex flex-col items-start px-8'>
                            <h4 className='text-2xl font-semibold pt-1'>Starter</h4>
                            <p className='text-sm text-[#627382] pt-1'>Perfect for getting started</p>
                            <p className='text-sm text-[#627382] my-5'><span className='text-4xl font-semibold text-black'>$0</span>/Month</p>

                            <ul className='text-sm text-[#627382] space-y-1'>
                                <li className='flex gap-2'><img src={checkImg} alt="" /> Access to 10 free tools</li>
                                <li className='flex gap-2'><img src={checkImg} alt="" /> Basic templates</li>
                                <li className='flex gap-2'><img src={checkImg} alt="" /> Community support</li>
                                <li className='flex gap-2'><img src={checkImg} alt="" /> 1 project per month</li>
                            </ul>

                            <p></p>
                            <p></p>
                            <p></p>

                            <button className='btn bg-gradient-to-r from-blue-700 to-purple-600 rounded-full text-white w-full mt-22'>Get Started Free</button>
                        </div>

                    </div>


                    {/* Card 2 */}
                    <div className='relative shadow-lg rounded-lg border border-gray-200 py-4 bg-gradient-to-r from-blue-700 to-purple-600'>

                        <div className='bg-yellow-200 absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-center text-orange-500'>
                            <p>Most Popular</p>
                        </div>

                        <div className='flex flex-col items-start px-8'>
                            <h4 className='text-2xl font-semibold pt-1 text-white'>Pro</h4>
                            <p className='text-sm text-[#627382] pt-1 text-white'>Best for professionals</p>
                            <p className='text-sm text-[#627382] my-5 text-white'><span className='text-4xl font-semibold text-white'>$29</span>/Month</p>

                            <ul className='text-sm text-white space-y-1'>
                                <li className='flex gap-2'><img src={checkImg} alt="" /> Access to all premium tools</li>
                                <li className='flex gap-2'><img src={checkImg} alt="" /> Unlimited templates</li>
                                <li className='flex gap-2'><img src={checkImg} alt="" /> Priority support</li>
                                <li className='flex gap-2'><img src={checkImg} alt="" /> Unlimited projects</li>
                                <li className='flex gap-2'><img src={checkImg} alt="" /> Cloud sync</li>
                                <li className='flex gap-2'><img src={checkImg} alt="" /> Advanced analytics</li>
                            </ul>

                            <p></p>
                            <p></p>
                            <p></p>

                            <button className='btn bg-white rounded-full w-full mt-10'>
                                <p className='bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent'>Start Pro Trial</p></button>
                        </div>

                    </div>

                    {/* Card 3 */}
                    <div className='relative shadow-lg rounded-lg overflow-hidden border border-gray-200 py-4 bg-white'>

                        <div className='flex flex-col items-start px-8'>
                            <h4 className='text-2xl font-semibold pt-1'>Enterprise</h4>
                            <p className='text-sm text-[#627382] pt-1'>For teams and businesses</p>
                            <p className='text-sm text-[#627382] my-5'><span className='text-4xl font-semibold text-black'>$99</span>/Month</p>

                            <ul className='text-sm text-[#627382] space-y-1'>
                                <li className='flex gap-2'><img src={checkImg} alt="" /> Everything in Pro</li>
                                <li className='flex gap-2'><img src={checkImg} alt="" /> Team collaboration</li>
                                <li className='flex gap-2'><img src={checkImg} alt="" /> Custom integrations</li>
                                <li className='flex gap-2'><img src={checkImg} alt="" /> Dedicated support</li>
                                <li className='flex gap-2'><img src={checkImg} alt="" /> SLA guarantee</li>
                                <li className='flex gap-2'><img src={checkImg} alt="" /> Custom branding</li>
                            </ul>

                            <p></p>
                            <p></p>
                            <p></p>

                            <button className='btn bg-gradient-to-r from-blue-700 to-purple-600 rounded-full text-white w-full mt-10'>Contact Sales</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;