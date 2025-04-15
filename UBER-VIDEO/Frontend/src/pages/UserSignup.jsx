import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            fullName:{
                firstname: firstname,
                lastname: lastname
            },
            email: email,
            password: password,
        })
        setEmail("");
        setPassword('');
        setFirstname('');
        setLastname('');
    }

    return (
        <div>
            <div className="p-7 h-screen flex flex-col justify-between">
                <div> 
                    <img className="w-20" src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
                    <form onSubmit={(e) => {
                        submitHandler(e)}
                    }>
                        <h3 className="text-base font-medium mb-2 mt-2">What's your name</h3>
                        <div className="flex gap-3 mt-2">
                            <input
                                required
                                value={firstname}
                                onChange={((e) => setFirstname(e.target.value))}
                                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
                                type="text" 
                                placeholder="Firstname" 
                            /> 
                            <input
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
                                type="text" 
                                placeholder="Lastname" 
                            /> 
                        </div>

                        <h3 className="text-base font-medium mb-2">What's your email</h3>
                        <input
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
                            type="email" 
                            placeholder="email@example.com" 
                        />  
            
                        <h3 className="text-base font-medium mb-3">Enter Password</h3>
            
                        <input
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
                            type="password" 
                            placeholder="password" 
                        />
                        <button 
                            className="bg-black text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base"
                        >
                            Sign up
                        </button>
            
                        <p className="mb-7">Already have an account? <Link to='/login' className="text-blue-600">Login here</Link></p>
                    </form >
                </div>
                <div>
                    <p className="text-xs leading tight">This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span>
                         and Terms of Service apply.</p>
                </div>
            </div>
        </div>
    );
}

export default UserSignup;