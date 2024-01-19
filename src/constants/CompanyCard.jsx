import React from 'react'
import { comapany_BannerLink1 } from "./DummyJob"
import { comapany_BannerLink2 } from "./DummyJob"

// this is the carousel at the end of the basic info page
const CompanyCard = () => {
    return (
        <div className='w-full '>
            <ul className='flex justify-evenly '>{
                comapany_BannerLink1.map((id) => (
                    <li id={id.id}>
                        <img className='rounded-md h-20 shadow-xl' src={id.src} alt="" />
                    </li>
                )
                )
            }
            </ul>
            <ul className='mt-4 flex justify-evenly '>{
                comapany_BannerLink2.map((id) => (
                    <li id={id.id}>
                        <img className='rounded-md h-20 shadow-xl' src={id.src} alt="" />
                    </li>
                )
                )
            }
            </ul>

        </div>
    )
}

export default CompanyCard