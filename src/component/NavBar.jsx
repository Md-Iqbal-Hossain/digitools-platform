import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const NavBar = ({ carts }) => {
    return (
        <div className="navbar border border-[#F2F2F2]">
            <div className="max-w-6xl mx-auto w-full px-4 flex justify-between items-center">

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

                <div className="navbar-end gap-2 md:gap-4">
                    <button className="p-2 rounded-full hover:bg-gray-100 relative">
                        <FiShoppingCart className="text-sm sm:text-base md:text-xl" />

                        {
                            carts.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                    {carts.length}
                                </span>
                            )
                        }
                    </button>
                    <ul className="menu menu-horizontal text-lg hidden md:flex"><li><a href="">Login</a></li></ul>
                    <button className="btn bg-gradient-to-r from-blue-700 to-purple-600 rounded-full text-white hidden md:block">Get Started</button>
                </div>

            </div>
        </div>
    );
};

export default NavBar;