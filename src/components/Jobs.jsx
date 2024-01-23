import React, { useEffect, useState } from 'react'
import Header from './Header'
import JobDetails from '../constants/JobDetails'
import { job_data } from '../constants/DummyJob'
import ShimmerUi from '../constants/ShimmerUi'


const Jobs = () => {
    const [showShimmer, setShowShimmer] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setShowShimmer(!showShimmer)
        }, 2000)
    }, [])
    return (
        <>
            <Header />
            <div className='pt-4 flex justify-center'>
                <h1 className='text-3xl font-serif font-medium justify-center'>Get latest job openings that best suits you</h1>
            </div>
            {
                showShimmer ? (
                    <>
                        {
                            job_data.map((jd) => (
                                <ShimmerUi id={jd.id} />
                            ))
                        }
                    </>
                ) :
                    (<div className='flex flex-col items-center pt-3 '>

                        {
                            job_data.map((jd) => (
                                <JobDetails id={jd.id} company={jd.company} title={jd.title} type={jd.type} experience={jd.experience} postedOn={jd.postedOn} location={jd.location} skills={jd.skills} job_link={jd.job_link} />
                            ))
                        }
                    </div>
                    )
            }

        </>
    )
}

export default Jobs
