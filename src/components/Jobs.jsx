import React from 'react'
import Header from './Header'
import JobDetails from '../constants/JobDetails'
import { job_data } from '../constants/DummyJob'

const Jobs = () => {
    return (
        <>
            <Header />
            <div className='flex flex-col items-center pt-3 '>
                <h1 className='text-3xl font-serif font-medium'>Get latest job openings that best suits you</h1>
                {
                    job_data.map((jd) => (
                        <JobDetails id={jd.id} company={jd.company} title={jd.title} type={jd.type} experience={jd.experience} postedOn={jd.postedOn} location={jd.location} skills={jd.skills} job_link={jd.job_link} />
                    ))
                }
            </div>

        </>
    )
}

export default Jobs