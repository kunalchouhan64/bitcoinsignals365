import React from 'react'
import { Link } from 'react-router-dom'
// import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {
    return (
        <>
            {/* <nav className=" border-gray-200 px-2 sm:px-4 py-3 top-0 z-50 sticky bg[#061034] hero_background mb:top-0 mb:z-50 mb:sticky overflow-hidden">
                <div className="container flex flex-wrap items-center justify-between mx-auto lg:px-20 ">
                    <Link to='/' className="flex items-center py-2">
                        <img src="\Images\bitcoinsignals_logo.png" className="h-28 lg:h-28 mb:h-20" alt="Bitcoin Signals 365 Logo" />
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button"
                        className="inline-flex items-center px-5 ml-3 text-2xl text-white rounded-lg md:hidden focus:outline-none focus:ring-2"
                        aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-9 h-9" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="flex flex-col p-4 mt-4 border rounded-xl md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:border-yellow-400 lg:space-x-12"
                        >
                            <li>
                                <Link to='/'
                                    className="block py-2 pl-3 pr-4 text-white bg-yellow-400 rounded md:bg-transparent text-xl md:p-0 dark:text-white font-Poppins btn_hover_header"
                                    aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to='/about'
                                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black md:dark:hover:bg-transparent text-xl font-Poppins btn_hover_header">About</Link>
                            </li>
                            <li>
                                <Link to='/services'
                                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black md:dark:hover:bg-transparent text-xl font-Poppins btn_hover_header">Services</Link>
                            </li>
                            <li>
                                <Link to='/pricing'
                                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black md:dark:hover:bg-transparent text-xl font-Poppins btn_hover_header">Pricing</Link>
                            </li>
                            <li>
                                <Link to='/contact'
                                    className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-yellow-400 dark:hover:text-black md:dark:hover:bg-transparent text-xl font-Poppins btn_hover_header">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}

            <nav className="nav flex flex-wrap items-center justify-between px-4 py-2 top-0 z-50 sticky  overflow-hidden hero_background md:px-20 mb:px-10">
                <div className="flex flex-no-shrink items-center mr-6 py- text-grey-darkest">
                    <Link to='/' className="flex items-center py-1">
                        <img src="\Images\bitcoinsignals_logo.png" className="h-28 lg:h-24 mb:h-20" alt="Bitcoin Signals 365 Logo" />
                    </Link>
                </div>

                <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
                <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none text-white" htmlFor="menu-btn">
                    <span style={{ color: 'white' }} className="navicon text-white flex items-center relative text-3xl"></span>
                </label>

                <ul className="menu md:border-none flex justify-center items-center list-reset m-0 w-full md:w-auto space-x-10 py-2">
                    <li className="text-center md:border-none">
                        <Link to='/' className="block md:inline-block px-0 py-0 no-underline font-[400] text-white font-Poppins text-xl pl-8 md:pl-0">Home</Link>
                    </li>

                    <li className="border-t text-center md:border-none">
                        <Link to='/about' className="block md:inline-block px-0 py-3 no-underline font-[400] text-white font-Poppins text-xl">About</Link>
                    </li>

                    <li className="border-t text-center md:border-none">
                        <Link to='/services' className="block md:inline-block px-0 py-3 no-underline font-[400] text-white font-Poppins text-xl">Services</Link>
                    </li>

                    <li className="border-t text-center md:border-none">
                        <Link to='/pricing' className="block md:inline-block px-0 py-3 no-underline  font-Poppins text-xl font-[400] text-white">Pricing</Link>
                    </li>
                    <li className="border-t text-center md:border-none">
                        <Link to='/contact' className="block md:inline-block px-0 py-3 no-underline  font-Poppins text-xl font-[400] text-white">Contact</Link>
                    </li>

                </ul>
            </nav>
        </>
    )
}

export default Header