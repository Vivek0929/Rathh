import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

 
    return (
        <nav className="bg-white shadow-sm sticky w-full z-50 top-0 left-0" >
            <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-16">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Section */}
                    <Link to='/'>
                        <div className="flex-shrink-0 flex items-center gap-1 cursor-pointer">
                            <img src="https://res.cloudinary.com/dtozixle0/image/upload/v1771349043/rathh-logo_Red_j9eppj.svg" alt="logo" className='h-15' />
                            <span className="text-2xl font-bold text-[#E2211C]">Rathh</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#destinations" className="text-[#E2211C] font-medium">Destinations</a>
                        <a href="#ways-to-travel" className="text-[#E2211C] font-medium">Ways to travel</a>
                         <a href="#about" className="text-[#E2211C] font-medium">About</a>
                        <a href="#my-bookings" className="text-[#E2211C] font-medium">My Bookings</a>
                    </div>
 

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-red-700 p-2 btn-toggle"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <a href="#destinations" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#E2211C] hover:bg-gray-50 rounded-md">Destinations</a>
                        <a href="#ways-to-travel" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#E2211C] hover:bg-gray-50 rounded-md">Ways to travel</a>
                         <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#E2211C] hover:bg-gray-50 rounded-md">About</a>
                        <a href="#my-bookings" className="block px-3 py-2 text-base font-medium text-[#E2211C] hover:bg-gray-50 rounded-md">My Bookings</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
