import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { useState } from 'react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-gradient-to-r from-blue-700 to-blue-500 border-gray-200 px-4 lg:px-6 py-3">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img className="h-10 w-auto mr-3" src={logo} alt="HomeNest Logo" />
                        <span className="text-2xl font-extrabold tracking-tight text-white">HomeNest</span>
                    </Link>
                    
                    {/* Mobile menu button */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        type="button" 
                        className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg lg:hidden hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        aria-controls="mobile-menu-2"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                    
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-blue-600 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-3 focus:outline-none transition-colors duration-300"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none transition-colors duration-300"
                        >
                            Get started
                        </Link>
                    </div>
                    
                    <div
                        className={`${isMenuOpen ? 'block' : 'hidden'} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 rounded transition-colors duration-300 text-base ${
                                            isActive ? "text-white bg-blue-700 lg:bg-transparent lg:text-yellow-300" : "text-blue-100 hover:bg-blue-700 lg:hover:bg-transparent lg:hover:text-yellow-300"
                                        } lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 rounded transition-colors duration-300 text-base ${
                                            isActive ? "text-white bg-blue-700 lg:bg-transparent lg:text-yellow-300" : "text-blue-100 hover:bg-blue-700 lg:hover:bg-transparent lg:hover:text-yellow-300"
                                        } lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 rounded transition-colors duration-300 text-base ${
                                            isActive ? "text-white bg-blue-700 lg:bg-transparent lg:text-yellow-300" : "text-blue-100 hover:bg-blue-700 lg:hover:bg-transparent lg:hover:text-yellow-300"
                                        } lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}