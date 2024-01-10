import React from 'react'
import Header from './Header'

const BasicInfoPage = () => {
    return (
        <>
            <Header />
            <div>
                <div className='flex flex-col items-center pt-[6%]' >
                    <h1 className=' text-5xl font-bold font-serif'>Find your <span className='text-purple-700' >dream job</span> now</h1>
                    <p className='text-2xl font-medium text-gray-800 pt-5'><span className='text-purple-700'>10 lakh+</span> jobs for you to explore</p>
                    <input className='mt-8 rounded-full w-[60%] p-5 text-2xl border-2 shadow-xl border-white' type="text" placeholder='Enter skills / designations / Companies' />
                </div>
            </div >
        </>
    )
}

export default BasicInfoPage