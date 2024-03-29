import React, { useEffect } from 'react'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBuilding, faFile, faHome, faPerson, faSearch, faSpaceShuttle, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import CompanyCard from '../constants/CompanyCard';


const BasicInfoPage = () => {
    const isAlreadyUser = useSelector(store => store.site.loginForm);

    return (
        <>
            <Header />
            <div>
                <div className=' flex flex-col items-center pt-[6%]' >
                    <h1 className=' text-5xl font-bold font-serif'>Find your <span className='text-purple-700' >dream job</span> now</h1>
                    <p className='text-2xl font-medium text-gray-800 pt-5'><span className='text-purple-700'>10 lakh+</span> jobs for you to explore</p>
                    <button className={isAlreadyUser ? 'hidden' : 'relative text-2xl top-[109px] left-[418px]'} >
                        <FontAwesomeIcon className='bg-purple-700 text-white shadow-2xl hover:bg-purple-600 p-[24px] rounded-r-full ' icon={faSearch} />
                    </button>
                    <input className='mt-8 rounded-full w-[60%] p-5 text-2xl border-2 shadow-2xl border-white' type="text" placeholder='Enter skills / designations / Companies' />
                    <ul className='flex justify-evenlyp-5 space-x-16 mt-28' >
                        <li className='text-2xl border hover:shadow-2xl cursor-pointer border-gray-400 p-3 rounded-xl ' ><FontAwesomeIcon className='bg-purple-300 p-1  rounded-full' icon={faHome} /> Remote</li>
                        <li className='text-2xl border hover:shadow-2xl cursor-pointer border-gray-400 p-3 rounded-xl ' ><FontAwesomeIcon className='bg-purple-300 p-1  rounded-full' icon={faBuilding} /> MNC</li>
                        <li className='text-2xl border hover:shadow-2xl cursor-pointer border-gray-400 p-3 rounded-xl ' ><FontAwesomeIcon className='bg-purple-300 p-1  rounded-full' icon={faPerson} /> HR</li>
                        <li className='text-2xl border hover:shadow-2xl cursor-pointer border-gray-400 p-3 rounded-xl ' ><FontAwesomeIcon className='bg-purple-300 p-1  rounded-full' icon={faFile} /> Internship</li>
                        <li className='text-2xl border hover:shadow-2xl cursor-pointer border-gray-400 p-3 rounded-xl ' ><FontAwesomeIcon className='bg-purple-300 p-1  rounded-full' icon={faSpaceShuttle} /> Startup</li>
                        <li className='text-2xl border hover:shadow-2xl cursor-pointer border-gray-400 p-3 rounded-xl ' ><FontAwesomeIcon className='bg-purple-300 p-1  rounded-full' icon={faBriefcase} /> Sales</li>
                        <li className='text-2xl border hover:shadow-2xl cursor-pointer border-gray-400 p-3 rounded-xl ' ><FontAwesomeIcon className='bg-purple-300 p-1  rounded-full' icon={faUserGraduate} /> Freshers</li>
                    </ul>
                    <p className='text-4xl pt-12 font-semibold' >
                        Top companies <span className='text-purple-700'>hiring</span> now
                    </p>
                    <div className="mt-3 shadow-2xl w-[100%] text-white flex justify-center flex-row p-8 pl-0 pr-0  " >
                        <CompanyCard />
                    </div>

                </div>
            </div >
        </>
    )
}

export default BasicInfoPage