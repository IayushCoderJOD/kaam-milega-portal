import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidDataForRegistration } from '../constants/Validate'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../constants/FireBase';
const Registration = () => {

    const email = useRef(null);
    const password = useRef(null);
    const phone = useRef(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleButtonClick = () => {
        const msg = checkValidDataForRegistration(email.current.value, password.current.value, phone.current.value);
        setErrorMessage(msg);
        if (msg) return;
        // create a new user
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + errorMessage)
                // ..
            });

    }
    return (
        <>
            <Header />
            <div className='flex'  >
                <div className='w-[30%] flex flex-col justify-center items-center '>
                    <div className='bg-gray-100  m-12 mb-2 flex justify-center shadow-xl rounded-full'>
                        <img className='p-7  w-64' src="https://static.naukimg.com/s/7/104/assets/images/white-boy.a0d2814a.png" alt="" />
                    </div>
                    <h1 className='text-black font-serif font-semibold text-2xl '>On <span className='text-purple-700'>registering</span>, you can</h1>
                    <ul className='font-normal text-lg pt-2'>
                        <li>✅ Build your profile and let recruiters find you</li>
                        <li>✅ Get job postings delivered right to your email</li>
                        <li>✅ Find a job and grow your career</li>
                    </ul>
                </div>
                <div className='w-[60%]  m-4 p-12 pt-6 bg-gray-100 shadow-2xl rounded-xl' >
                    <div className='ml-28' >
                        <h1 className='text-2xl font-semibold'> Find a <span className='text-purple-700' >job</span> & grow your <span className='text-purple-700' >career</span> </h1>
                        <form onSubmit={(e) => e.preventDefault()} className='flex flex-col pt-7 text-xl'>
                            <label>Name</label>
                            <input className='border w-[80%] border-purple-700 p-2 text-xl rounded-xl' placeholder='What is your name?' type="text" />
                            <br />
                            <label>Email id</label>
                            <input ref={email} className='border w-[80%] border-purple-700  p-2 text-xl rounded-xl ' placeholder='Tell us your EMAIL-ID' type="email" />
                            <br />

                            <label>Password</label>
                            <input ref={password} className='border w-[80%] border-purple-700 p-2 text-xl rounded-xl' placeholder='Create a password for your account' type="password" />
                            <br />
                            <label>Mobile number</label>
                            <input ref={phone} className='border w-[80%] border-purple-700 p-2 text-xl rounded-xl' placeholder='+91-95206xxxxx' type="number" />
                            <p className='text-xl pt-3 text-red-600' >{errorMessage}</p>
                            <button onClick={handleButtonClick} className="mt-7 p-2 text-white rounded-xl shadow-2xl hover:bg-purple-600 ml-52 bg-purple-700 w-1/4" type='submit' >Register</button>
                        </form>
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export default Registration