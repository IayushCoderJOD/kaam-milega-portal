import React from 'react'
import { Link } from 'react-router-dom'

const JobDetails = ({ title, company, type, experience, postedOn, location, skills, job_link }) => {
    return (
        <>
            <div className=' flex justify-between  mt-9 bg-gray-100 shadow-xl p-4 w-[60%] rounded-xl' >
                <div>
                    <h1 className='text-2xl'>{title}-{company}</h1>
                    <p className='pt-2 text-gray-700' >{type} . {experience} . {location}</p>
                    <div className='flex    '>
                        {
                            skills.map((skill) => (
                                <div className='border border-gray-600 rounded-lg shadow-xl p-1 m-2'>
                                    {skill}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='flex flex-col justify-center' >
                    <h1>post on {postedOn}</h1>
                    <Link target='_blank' to={job_link} >
                        <button className='bg-purple-700 w-32 p-2 m-2 text-white rounded-lg shadow-lg hover:bg-purple-900'>Apply</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default JobDetails