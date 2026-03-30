import React from 'react';
import BannerImage from '../assets/banner.png'
import CircleImg from '../assets/circle.png'
import playImg from '../assets/Play.png'

const Banner = () => {
    return (
        <div className="relative min-h-162.5 flex items-center overflow-hidden">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                {/* Left Content */}
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-violet-700/10 border border-none text-violet-600 text-sm font-medium px-5 py-2 rounded-full">
                        <img src={CircleImg} alt="" />
                        New: AI-Powered Tools Available
                    </div>

                    <h1 className="text-4xl lg:text-7xl font-semibold leading-tight tracking-tighter text-black-600">
                        Supercharge Your
                        <br />
                        <span className="">
                            Digital Workflow
                        </span>
                    </h1>

                    <p className="text-lg text-zinc-700 max-w-xl ">
                        Access premium AI tools, design assets, templates, and productivity
                        <br/>
                        software—all in one place. Start creating faster today.
                        <br/>
                        Explore Products
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="btn py-6 bg-gradient-to-r from-blue-700 to-purple-600 hover:bg-violet-500 rounded-full text-white">
                            Explore Products
                        </button>
                        <button className="btn border border-violet-500 bg-white hover:bg-white-500 transition-all py-6 rounded-full flex items-center gap-3 group text-white">
                            <img src={playImg} alt="" />
                            <span className='bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent'>Watch Demo</span>
                        </button>
                    </div>

                </div>

                {/* Right Content */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                        <img
                            className="relative h-130 w-auto object-contain drop-shadow-2xl rounded-3xl"
                            src={BannerImage}
                            alt="AI Models Banner"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;