import React from 'react';

const Cart = ({ carts }) => {
    console.log(carts);

    return (
        <div className='shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6'>
            <h1 className='text-2xl font-semibold'>Your Cart</h1>

            <div className='space-y-4 mt-4'>
                {
                    carts.map(item =>
                        <div key={item.id} className='flex justify-start items-center gap-6 border border-gray-200 shadow-lg rounded-lg overflow-hidden p-6 bg-gray-50'>
                            <div>
                                <img className='h-8 w-8' src={item.icon} alt="" />
                            </div>

                            <div>
                                <div className='text-lg font-semibold'>
                                    <h2>{item.name}</h2>
                                </div>

                                <div>
                                    <p className='text-[#627382]'>${item.price}</p>
                                </div>
                            </div>


                        </div>
                    )
                }
            </div>

            <div className='flex justify-between items-center mt-4'>
                <div>
                    <p className='text-[#627382]'>
                        Total
                    </p>
                </div>
                <div className='text-2xl font-semibold'>
                    $0
                </div>
            </div>
        </div>
    );
};

export default Cart;