import React, { useState } from 'react';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='flex justify-evenly p-5 bg-purple-600 shadow-xl'>
            <div className='flex space-x-11'>
                <img src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="" />
            </div>
            <div>
                <ul className='flex space-x-9 text-xl font-normal text-white'>
                    <li>Jobs</li>
                    <li>Companies</li>
                    <li>Services</li>
                </ul>
            </div>
            <div>
                <ul className='flex space-x-7 text-xl font-normal text-white'>
                    <li className='border border-white bg-white hover:bg-gray-200 text-purple-800 pr-2 pl-2 p-1 rounded-full shadow-2xl'>
                        <button>Login</button>
                    </li>
                    <li className='border border-white pr-2 pl-2 hover:bg-purple-800 p-1 rounded-full shadow-2xl text-white'>Register</li>
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
        </div>
    );
};

export default Header;
