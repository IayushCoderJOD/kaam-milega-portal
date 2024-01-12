import React from 'react'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBuilding, faFile, faHome, faPerson, faSearch, faSpaceShuttle, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

const Registration = () => {
    return (
        <>
            <Header />
            <div className='flex'  >
                <div className='w-[30%] flex flex-col justify-center items-center '>
                    <div className='bg-gray-100 m-12 mb-2 flex justify-center shadow-xl rounded-full'>
                        <img className='p-7  w-64' src="https://static.naukimg.com/s/7/104/assets/images/white-boy.a0d2814a.png" alt="" />
                    </div>
                    <h1 className='text-black font-serif font-semibold text-2xl '>On <span className='text-purple-700'>registering</span>, you can</h1>
                    <ul className='font-normal text-lg pt-2'>
                        <li>✅ Build your profile and let recruiters find you</li>
                        <li>✅ Get job postings delivered right to your email</li>
                        <li>✅ Find a job and grow your career</li>
                    </ul>
                </div>
                <div className='w-[70%] ' >
                    <div className='m-4 bg-gray-100 p-2 w-[80%] rounded-xl flex flex-col  items-center '>
                        <h1 className='text-2xl font-semibold'> Find a <span className='text-purple-700' >job</span> & grow your <span className='text-purple-700' >career</span> </h1>
                        <div className='flex flex-col pt-7 text-xl'>
                            <label>Name</label>
                            <input className='border border-purple-700 p-2 text-xl rounded-xl' placeholder='What is your name?' type="text" />
                            <label>Email id</label>
                            <input className='border border-purple-700  p-2 text-xl rounded-xl ' placeholder='Tell us your EMAIL-ID' type="text" />
                            <label>Password</label>
                            <input className='border border-purple-700 p-2 text-xl rounded-xl' placeholder='' type="text" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration