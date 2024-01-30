import React from 'react'
import { Link } from 'react-router-dom'

const NewsComponent = ({ title, author, readMore, comments }) => {
    return (
        <div className='bg-purple-200 rounded-xl shadow-xl  p-5 m-8  flex flex-col flex-wrap w-[50%]'>
            <h1 className='text-3xl text-gray-900 font-serif font-semibold '>
                {title}
            </h1>
            <p className='text-lg font-medium text-gray-700 pt-2'>
                By- {author} | {comments} comments
            </p>
            <Link to={readMore} target='_blank' >
                <p className='pt-2 text-red-800 font-medium text-xl'>
                    Read More
                </p>
            </Link>
        </div>
    )
}

export default NewsComponent
