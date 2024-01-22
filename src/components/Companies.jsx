import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import NewsComponent from './NewsComponent';
const Companies = () => {
    const [searchTerm, setSearchTerm] = useState('html');
    const inputRef = useRef();
    const url = `http://hn.algolia.com/api/v1/search?query=${searchTerm}`;

    const handleSearchNews = async () => {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Failed to fetch data. Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    };

    const handleInputChange = () => {
        setSearchTerm(inputRef.current.value);
    };

    const handleSearchButtonClick = () => {
        handleSearchNews();
    };

    return (
        <div>
            <Header />
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl p-2 font-bold' >
                    Tech <span className='text-purple-700'>News</span> on the <span className='text-purple-700'>Go</span>
                </h1>
            </div>
            <div className='flex justify-center'>
                <div>
                    {/* here comes the Search Bar */}
                    <input
                        ref={inputRef}
                        className='ml-8 text-xl w-96 rounded-2xl shadow-xl m-4 border-2 border-black p-4'
                        type="text"
                        placeholder='search about any technology....'
                        onChange={handleInputChange}
                    />
                    <button
                        className=' relative left-[-55px] top-[2px] '
                        onClick={handleSearchButtonClick}
                    >
                        <FontAwesomeIcon className='text-xl' icon={faSearch} />
                    </button>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <NewsComponent />
            </div>
        </div>
    );
};

export default Companies;
