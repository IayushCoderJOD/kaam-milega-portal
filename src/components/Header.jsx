import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [showLogginWindow, setShowLoginWindow] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className=' flex justify-evenly p-5 bg-purple-600 shadow-xl'>
            <Link to={"/"} >
                <div className='flex space-x-11'>
                    <img src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="" />
                </div>
            </Link>
            <div>
                <ul className='flex space-x-9 text-2xl font-normal text-white'>
                    <li>Jobs</li>
                    <li>Companies</li>
                    <li>Services</li>
                </ul>
            </div>
            <div>
                <ul className='flex space-x-7 text-xl font-normal text-white'>
                    <li className='border border-white bg-white hover:bg-gray-200 text-purple-800 pr-2 pl-2 p-1 rounded-full shadow-2xl'>
                        <button onClick={() => {
                            setShowLoginWindow(!showLogginWindow);
                        }} >Login</button>
                    </li>
                    <Link to={"/register"}>
                        <li className='border border-white pr-2 pl-2 bg-purple-700 hover:bg-purple-800 p-1 rounded-full shadow-2xl text-white'>Register</li>
                    </Link>
                    <li className='text-gray-100'>|</li>
                    <li>
                        <button
                            id="dropdownDefaultButton"
                            onClick={toggleDropdown}
                            className="text-purple-500 bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-purple-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center shadow-2xl"
                            type="button"
                        >
                            Dashboard{' '}
                            <svg className={`w-2.5 h-2.5 ms-3 ${isDropdownOpen ? 'transform rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>

                        <div
                            id="dropdown"
                            className={`absolute z-10 ${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-white`}
                        >
                            <ul className="py-2 text-sm text-purple-500 dark:text-purple-500" aria-labelledby="dropdownDefaultButton">
                                <li>
                                    <div className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</div>
                                </li>
                                <li>
                                    <div className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</div>
                                </li>
                                <li>
                                    <div className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Careers</div>
                                </li>
                            </ul>
                        </div>
                    </li>

                </ul>
            </div>

            <div className={!showLogginWindow ? 'hidden' : 'absolute shadow-2xl rounded-md right-0 bg-gray-100 h-full w-[38%] top-0 '} >
                <button onClick={() => {
                    setShowLoginWindow(!showLogginWindow);
                }} className='text-2xl pl-3 pt-3'>❌</button>
                <h1 className='pt-28 text-purple-700 text-4xl font-semibold pl-[40%] ' >Login here</h1>
            </div>
        </div>
    );
};

export default Header;