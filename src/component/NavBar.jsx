import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const NavBar = () => {
    return (
        <div className="navbar border border-[#F2F2F2]">
            <div className="max-w-6xl mx-auto w-full flex justify-between items-center">

                <div className="navbar-start">
                    <h2 className="font-bold text-3xl bg-gradient-to-r from-blue-800 to-purple-600 bg-clip-text text-transparent">DigiTools</h2>
                </div>

                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal gap-4 px-1 text-lg">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>

                <div className="navbar-end gap-0">
                    <button className="p-2 rounded-full hover:bg-gray-100">
                        <FiShoppingCart className="text-sm sm:text-base md:text-xl" />
                    </button>
                    <ul className="menu menu-horizontal text-lg"><li><a href="">Login</a></li></ul>
                    <button className="btn bg-gradient-to-r from-blue-700 to-purple-600 rounded-full text-white">Get Started</button>
                </div>

            </div>
        </div>
    );
};

export default NavBar;