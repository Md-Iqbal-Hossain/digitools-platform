import React, { use } from 'react';
import ModelCard from './ModelCard';
import Cart from './Cart';

const Models = ({ modelPromise, activeTab, setActiveTab, carts, setCarts }) => {
    const models = use(modelPromise);

    return (
        <div className='max-w-6xl mx-auto w-full py-20'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
                <p>Choose from our curated collection of premium digital products designed
                    <br />to boost your productivity and creativity.</p>
            </div>

            {/* Tabs */}
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box justify-center bg-transparent">
                <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products" onClick={() => setActiveTab('product')} defaultChecked />
                <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Cart" onClick={() => setActiveTab('cart')} />
            </div>

            {/* Products */}
            {/* {
                activeTab === 'product' && (
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                        {models.map((model) => (
                            <ModelCard key={model.id} model={model} />
                        ))}
                    </div>
                )
            } */}

            <div className={activeTab === 'product' ? 'block' : 'hidden'}>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                    {models.map((model) => (
                        <ModelCard key={model.id} model={model} carts = {carts} setCarts = {setCarts}/>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Models;