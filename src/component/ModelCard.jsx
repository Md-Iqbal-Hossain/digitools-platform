import React, { useState } from 'react';
import checkImg from '../assets/Check.png';
import { toast } from 'react-toastify';

const ModelCard = ({ model, carts, setCarts }) => {
    const [isBuy, setIsBuy] = useState(false);
    const handleBuy = () => {
        setIsBuy(true);

        const isFound = carts.find(item => item.id === model.id);
        if (isFound) {
            toast.error('Product already in cart');
            return;
        }

        setCarts([...carts, model]);
        toast.success('Product added to cart');
    }

    const getTagColor = (tag) => {
        if (tag === 'best seller') return 'bg-yellow-100 text-orange-700';
        else if (tag === 'popular') return 'bg-violet-200 text-violet-700';
        else if (tag === 'new') return 'bg-green-200 text-green-700';
        else return 'bg-gray-200 text-black';
    };

    const isAdded = carts.some(item => item.id === model.id);

    return (
        <div className='shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6'>
            <div className='flex justify-end'>
                <p className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${getTagColor(model.tag)}`}>
                    {model.tag}
                </p>
            </div>

            <img src={model.icon} alt="" />

            <div className='space-y-3'>
                <h2 className='text-2xl font-semibold'>{model.name}</h2>
                <p className='text-sm text-[#627382]'>{model.description}</p>

                <div className='text-2xl font-semibold'>
                    ${model.price}
                    <span className='text-sm text-[#627382] font-normal'>/{model.period}</span>
                </div>

                <ul className='text-sm text-[#627382] space-y-1'>
                    {model.features.map((feature, index) => (
                        <li key={index} className='flex gap-2'>
                            <img src={checkImg} alt="" /> {feature}
                        </li>
                    ))}
                </ul>


                <button
                    onClick={handleBuy}
                    disabled={isAdded}
                    className={`btn rounded-full w-full mt-5 text-white 
    ${isAdded ? 'bg-green-500 cursor-not-allowed' : 'bg-gradient-to-r from-blue-700 to-purple-600'}`}
                >
                    {isAdded ? (
                        <span className="flex items-center justify-center gap-2">
                            <img src={checkImg} alt="" className="w-4 h-4 brightness-0 invert" />
                            Added to Cart
                        </span>
                    ) : (
                        'Buy Now'
                    )}
                </button>
            </div>
        </div>
    );
};

export default ModelCard;