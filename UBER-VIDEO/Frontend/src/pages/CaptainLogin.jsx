import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [captainData, setCaptainData] = useState({});
    
        const submitHandler = (e) => {
            e.preventDefault();
            setCaptainData({
                email: email,
                password: password,
            })
            setEmail("");
            setPassword("");
        }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
    <div> 
        <img className="w-19" src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
        <form onSubmit={(e) => {
            submitHandler(e)}
        }>
            <h3 className="text-xl mb-2">What's your email</h3>
            <input 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                type="email" 
                placeholder="email@example.com" 
            />

            <h3 className="text-xl mb-3">Enter Password</h3>

            <input 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                type="password" 
                placeholder="password" 
            />
            <button 
                className="bg-black text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base"
            >
                Login
            </button>

            <p className="mb-7">Join a Fleet? <Link to='/captain-signup' className="text-blue-600">Register as a Captain</Link></p>
        </form >
    </div>
    <div>
        <Link to='/login'
            className="bg-[#e68526] flex justify-center items-center text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
        >
            Sign in as User
        </Link>
    </div>
    </div>
  );
}

export default CaptainLogin;