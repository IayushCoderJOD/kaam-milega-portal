import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { alreadyUser } from '../slices/LoginSlice';
import { checkValidDataForLogin } from "../assets/Validate"
const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const isAlreadyUser = useSelector(store => store.site.loginForm);
    const email = useRef(null);
    const password = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    // const navigate = useNavigate()

    const handleLoginForm = () => {
        dispatch(alreadyUser())
    }
    const handleButtonClick = () => {
        // validate the data;
        const msg = checkValidDataForLogin(email.current.value, password.current.value);
        setErrorMessage(msg);

    }

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
                    <Link to={"/jobs"} >
                        <li className='cursor-pointer hover:text-pruple-800' >Jobs</li>
                    </Link>
                    <li>Companies</li>
                    <li>Services</li>
                </ul>
            </div>
            <div>
                <ul className='flex space-x-7 text-xl font-normal text-white'>
                    <li className='border border-white bg-white hover:bg-gray-200 text-purple-800 pr-2 pl-2 p-1 rounded-full shadow-2xl'>
                        <button onClick={() =>
                            handleLoginForm()
                        } >Login</button>
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

            <div className={!isAlreadyUser ? 'hidden' : 'absolute shadow-2xl rounded-md right-0 bg-white h-full w-[38%] top-0 '} >
                <button onClick={() =>
                    handleLoginForm()
                } className='text-2xl pl-3 pt-3'>❌</button>
                <h1 className='pt-28 text-purple-700 text-4xl font-semibold pl-[40%] ' >Login here</h1>
                <div className='bg-gray-100 m-4 shadow-lg rounded-2xl'>
                    <form onSubmit={(e) => e.preventDefault()} className=' ml-12 flex flex-col pt-7 text-xl '>
                        <label>Email id</label>
                        <input ref={email} className='border w-[80%] border-purple-700  p-2 text-xl rounded-xl ' placeholder='Enter your EMAIL-ID' type="email" />

                        <label className='pt-5' >Password</label>
                        <input ref={password} className='border w-[80%] border-purple-700 p-2 text-xl rounded-xl' placeholder='Enter your password' type="password" />

                        <p className='pt-2 text-xl text-red-600 font-normal font-serif'  >{errorMessage}</p>

                        <button onClick={handleButtonClick} className="mt-7 mb-7 p-2 text-white rounded-xl shadow-2xl hover:bg-purple-600 ml-40 bg-purple-700 w-1/4" type='submit' >Take me in</button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Header;
