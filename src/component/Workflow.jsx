import React from 'react';

const Workflow = () => {
    return (
        <div className='bg-gradient-to-r from-blue-800 to-purple-600'>
            <div className='max-w-6xl mx-auto w-full py-26'>
                <h1 className='text-5xl text-white font-bold text-center'>Ready to Transform Your Workflow?</h1>
                <p className='pt-4 text-sm text-white text-center'>Join thousands of professionals who are already using Digitools to work smarter.</p>
                <p className='pb-10 text-sm text-white text-center'>Start your free trial today.</p>

                <div className='flex gap-4 justify-center items-center'>
                    <button className='btn bg-white rounded-full'>
                        <p className='bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent'>Explore Products</p></button>
                    <button className='btn bg-transparent rounded-full'>
                        <p className='text-white'>View Pricing</p></button>
                </div>

                <div>
                    <p className='text-white text-center mt-6'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
                
            </div>


        </div>
    );
};

export default Workflow;