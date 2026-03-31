import React from 'react';
import cartImg from '../assets/products/shopping-cart.png';

const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

    const handlePayment = () => {
        setCarts([]);
    }

    const handleDelete = (item) => {
        const filteredArray = carts.filter(c => c.id !== item.id);
        setCarts(filteredArray);
        
    }

    return (
        <div className='shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6'>
            <h1 className='text-2xl font-semibold'>Your Cart</h1>

            {
                carts.length === 0
                    ? <div className='flex flex-col space-y-5 justify-center items-center p-14'>
                        <div className='h-20 w-20'>
                            <img className='h-full w-full object-contain grayscale opacity-50' src={cartImg} alt="" />
                        </div>

                        <p className='text-gray-400 text-lg font-semibold'>Your cart is empty</p>
                    </div>

                    : <>
                        <div className='space-y-4 mt-4'>
                            {
                                carts.map(item =>
                                    <div key={item.id} className='flex justify-between items-center gap-6 border border-gray-200 shadow-lg rounded-lg overflow-hidden p-6 bg-gray-50'>

                                        <div className='flex justify-start items-center gap-6'>
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


                                        <div>
                                            <button onClick={() => handleDelete(item)} className='text-red-500 btn'>Remove</button>
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
                                ${totalPrice}
                            </div>
                        </div>

                        <button onClick={handlePayment} className="btn bg-gradient-to-r from-blue-700 to-purple-600 rounded-full text-white w-full mt-4">Proceed To Checkout</button>
                    </>
            }


        </div>
    );
};

export default Cart;