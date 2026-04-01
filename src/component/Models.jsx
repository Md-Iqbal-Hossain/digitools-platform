import React, { use } from 'react';
import ModelCard from './ModelCard';
import Cart from './Cart';

const Models = ({ modelPromise, activeTab, setActiveTab, carts, setCarts }) => {
    const models = use(modelPromise);

    return (
        <div className='max-w-6xl mx-auto w-full py-20'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
                <p className='py-4 text-sm text-[#627382]'>Choose from our curated collection of premium digital products designed
                    <br />to boost your productivity and creativity.</p>
            </div>

            {/* Tabs */}
            {/* <div className="tabs tabs-box justify-center bg-transparent"> */}
            <div className="bg-white rounded-full p-1 w-max mx-auto border border-gray-100 tabs tabs-box justify-center">

                {/* Products Tab */}
                <input
                    type="radio"
                    name="my_tabs_1"
                    className={`tab rounded-full w-40 
      ${activeTab === 'product' ? 'bg-gradient-to-r from-blue-800 to-purple-600 text-white' : 'bg-white text-black'}`}
                    aria-label="Products"
                    checked={activeTab === 'product'}
                    onChange={() => setActiveTab('product')}
                />

                {/* Cart Tab */}
                <input
                    type="radio"
                    name="my_tabs_1"
                    className={`tab rounded-full w-40 
      ${activeTab === 'cart' ? 'bg-gradient-to-r from-blue-800 to-purple-600 text-white' : 'bg-white text-black'}`}
                    aria-label={`Cart (${carts.length})`}
                    checked={activeTab === 'cart'}
                    onChange={() => setActiveTab('cart')}
                />
            </div>

            <div className={activeTab === 'product' ? 'block' : 'hidden'}>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                    {models.map((model) => (
                        <ModelCard key={model.id} model={model} carts={carts} setCarts={setCarts} />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Models;