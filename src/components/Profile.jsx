import React, { useReducer, useRef, useState } from 'react'
import Header from './Header'
import profilePic from '../assets/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faLocation, faMailReply, faMessage, faPhone, faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addSkill, removeSkill } from '../slices/SkillSlice'

const Profile = () => {

    const dispatch = useDispatch();
    const skillToAdd = useRef(null)
    const [removeButton, setRemoveButton] = useState('hidden')
    const skills = useSelector(store => store.skills);
    const handleSkillAddClick = () => {
        dispatch(addSkill(skillToAdd.current.value));
        skillToAdd.current.value = "";
    }

    const handleRemoveSkill = (index) => {
        dispatch(removeSkill(index));
    };
    return (
        <>
            <Header />
            <div className='overflow-hidden flex justify-around'>
                <div className=' bg-gray-100 shadow-2xl  w-[60%] rounded-xl mt-4 h-full pb-12' >
                    {/* below div will be the profile wallpaper */}
                    <div>
                        <img className='opacity-80 h-52 w-full rounded-lg ' src="https://img.freepik.com/free-vector/abstract-banner-with-low-poly-plexus-network-communications-design_1048-12914.jpg?w=1380&t=st=1705741639~exp=1705742239~hmac=b9ad16ab2d9f3e7645b089f6a70ffb1e2b310011765e7110c1ec71ac549168de" alt="" />
                    </div>
                    <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" className='md:w-48 md:h-48 absolute right-[22%] top-[30%] h-32 w-32 border-4 border-white  rounded-full shadow-2xl ' alt="" />
                    {/* below div will be the information page */}
                    <div className='flex justify-start'>
                        <div>
                            <h1 className='font-medium text-2xl pl-5 pt-2 font-serif '>Ishita Goswami <span className="text-gray-600 text-xl font-light" >(She/Her)</span></h1>
                        </div>
                        <div className='flex pl-[215px]'>
                            <img className='h-8 m-1' src="https://media.licdn.com/dms/image/C510BAQHFNX62-HXwqA/company-logo_100_100/0/1631428673516/kiet_group_of_institutions_logo?e=1714003200&v=beta&t=uFdjfrJ14Av1MuHhjN6bYstgZXv5wercvoYWs26_GHE" alt="" />
                            <h1 className='pt-2 text-md'>Kiet Group of Institutions</h1>
                        </div>

                    </div>
                    <hr className='ml-2 w-[70%]' /> < hr className=' ml-2 w-[70%]' />
                    <div className='flex'>
                        <ul className='pl-5 mt-2 text-sm text-gray-700'>
                            <li className='mb-2'> <FontAwesomeIcon className='pr-1 ' icon={faLocation} /> New Delhi, INDIA</li>
                            <li className='mb-2'> <FontAwesomeIcon className='pr-1 ' icon={faSuitcase} /> Fresher</li>
                            <li className='mb-2'> <FontAwesomeIcon className='pr-1 ' icon={faCalendar} /> Add availability to join</li>
                        </ul>
                        <ul className='ml-72 mt-2 text-md text-gray-700'>
                            <li> <FontAwesomeIcon className='pr-1 ' icon={faPhone} />  7417897075</li>
                            <li><FontAwesomeIcon className='pr-1 ' icon={faMessage} /> ishi13@gmail.com</li>
                        </ul>
                    </div>
                    <h1 className='pt-4 pl-5 text-xl font-semibold text-black'>Key skills</h1>
                    <hr className='ml-2 w-[70%]' /> < hr className=' ml-2 w-[70%]' />
                    {/* skills */}
                    <div className='pl-5 mt-2 flex space-x-3'>
                        {skills.length === 0 ? (
                            <h1 className='text-xl pt-1' >Please add some skills</h1>
                        ) : (
                            <h1 className='text-xl pt-1' >You can add more skills</h1>
                        )}
                        <input className=' w-[10%] p-2  text-md rounded-2xl shadow-lg bg-gray-200 text-black' type="text"
                            ref={skillToAdd}
                            placeholder="📝......." />
                        <button
                            onClick={handleSkillAddClick}
                            className='text-lg hover:text-xl'>➕</button>
                    </div>
                    <ul className='flex space-x-4 pt-4 pl-5 text-xl font-serif font-medium ' >
                        {skills.map((skill, i) => (
                            <li
                                onMouseOver={() => {
                                    setRemoveButton('block')
                                }}
                                onClick={() => handleRemoveSkill(i)}
                                onMouseOut={() => {
                                    setRemoveButton('hidden')
                                }}
                                className='cursor-pointer bg-gray-100 w-fit p-1 text-purple-800 rounded-xl shadow-xl flex' id={i} > {skill}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </>
    )
}

export default Profile
