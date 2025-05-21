import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom"; 
import { CaptainDataContext } from "../context/captainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CaptainSignup = () => {

    const navigate = useNavigate();

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ vehicleColor, setVehicleColor] = useState('');
    const [ vehiclePlate, setVehiclePlate] = useState('');
    const [ vehicleCapacity, setVehicleCapacity] = useState('');
    const [ vehicleType, setVehicleType] = useState('');

    const { captain, setCaptain } = React.useContext(CaptainDataContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        const captainData = {
            fullname:{
                firstname: firstname,
                lastname: lastname
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: vehicleCapacity,
                vehicleType: vehicleType,
            }
        }

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captainData);  

        if(response.status === 201){
            const data = response.data;
            setCaptain(data.captain);
            localStorage.setItem('token', data.token)
            navigate('/captain-home')
        }

        setEmail("");
        setPassword('');
        setFirstname('');
        setLastname('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleCapacity('');
        setVehicleType('');
    }

    return (
        <div>
            <div className="p-7 h-screen flex flex-col justify-between">
                <div> 
                    <img className="w-20" src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }
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

                        <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
                        <div className="flex gap-4 mb-7">
                            <input 
                                required
                                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-base placeholder:text-sm"
                                type="text"
                                placeholder="Vehicle Color"
                                value={vehicleColor}
                                onChange={(e) => {
                                    setVehicleColor(e.target.value);
                                }}
                            />
                            <input 
                            required
                                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-base placeholder:text:sm"
                                type="text"
                                placeholder="Vehicle Plate"
                                value={vehiclePlate}
                                onChange={(e) => {
                                    setVehiclePlate(e.target.value);
                                }}
                            />
                        </div>
                        <div className="flex gap-4 mb-7">
                            <input 
                                required
                                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-base placeholder:text-sm"
                                type="number"
                                placeholder="Vehicle Capacity"
                                value={vehicleCapacity}
                                onChange={(e) => {
                                    setVehicleCapacity(e.target.value);
                                }}
                            />
                            <select 
                                required
                                className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-base placeholder:text-sm"
                                value={vehicleType}
                                onChange={(e) => {
                                    setVehicleType(e.target.value);
                                }}
                            >
                                <option value="" disabled>Select Vehicle Type</option>
                                <option value="car">Car</option>
                                <option value="auto">Auto</option>
                                <option value="motorcycle">Moto</option>
                            </select>
                        </div>
                        <button 
                            className="bg-black text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base"
                        >
                            Sign up as Captain
                        </button>
            
                        <p className="mb-7">Already have an account? <Link to='/captain-login' className="text-blue-600">Login here</Link></p>
                    </form >
                </div>
                <div>
                    <p className="text-xs mt-6 leading tight">This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span>
                         and Terms of Service apply.</p>
                </div>
            </div>
        </div>
    );
}

export default CaptainSignup;