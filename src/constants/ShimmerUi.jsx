import React from 'react'

const ShimmerUi = () => {
    return (
        <div>
            <div className='flex flex-col items-center pt-3 '>
                <div className=' flex justify-between  mt-9 bg-gray-50 shadow-lg p-4 h-40 w-[60%] rounded-xl' >
                    <div>
                        <div className='text-2xl h-9 bg-gray-200 w-36 rounded-md '></div>
                        <div className='mt-3 rounded-lg text-gray-500 h-5 w-24 bg-gray-200' ></div>
                        <div className='flex justify-start space-x-2  mt-6' >
                            <div className='h-3 w-7 p-4 rounded-md bg-gray-200' ></div>
                            <div className='h-3 w-7 p-4 rounded-md bg-gray-200' ></div>
                            <div className='h-3 w-16 p-4 rounded-md bg-gray-200' ></div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center' >
                        <div className='bg-gray-200 w-20 h-8 rounded-md ' ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShimmerUi