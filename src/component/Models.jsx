import React, { use } from 'react';
import { TiTickOutline } from 'react-icons/ti';
import checkImg from '../assets/Check.png'

const Models = ({ modelPromise }) => {
    const models = use(modelPromise);
    console.log(models);

    const getTagColor = (tag) => {
        if (tag === 'best seller') return 'bg-yellow-100 text-orange-700';
        else if (tag === 'popular') return 'bg-violet-200 text-violet-700';
        else if (tag === 'new') return 'bg-green-200 text-green-700';
        // return 'bg-gray-300 text-black';
    };

    return (
        <div className='max-w-6xl mx-auto w-full py-20'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
                <p>Choose from our curated collection of premium digital products designed
                    <br />to boost your productivity and creativity.</p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {models.map(model => <div className='shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6'>
                    <div className='flex justify-end'>
                        <p className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getTagColor(model.tag)} `}>{model.tag}</p>
                    </div>

                    <div>
                        <img src={model.icon} alt="" />

                    </div>

                    <div className='space-y-3'>
                        <h2 className='text-2xl font-semibold'>{model.name}</h2>
                        <p className='text-sm text-[#627382]'>{model.description}</p>
                        <div className='text-2xl font-semibold'>${model.price}<span className='text-sm text-[#627382] font-normal'>/{model.period}</span></div>

                        <ul className='text-sm text-[#627382] space-y-1'>
                            {model.features.map((feature, index) => (
                                <li key={index} className='flex gap-2'> <img src={checkImg} alt="" /> {feature}</li>
                            ))}
                        </ul>

                        <button className="btn bg-gradient-to-r from-blue-700 to-purple-600 rounded-full text-white w-full mt-5">Buy Now</button>
                    </div>

                </div>)}

            </div>

        </div>
    );
};

export default Models;