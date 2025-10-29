import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const RideConfirmPopup = (props) => {

    const [otp, setOtp] = useState("");
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/start-ride`, {
            params: {
                rideId: props.ride._id,
                otp: otp
            },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });

        if (response.status === 200) {
            props.setRideConfirmPopupPanel(false);
            props.setRidePopupPanel(false);
            navigate('captain-riding');
        }
    }

    return (
        <div>
            <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={() => {
                props.setRideConfirmPopupPanel(false);
            }}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
            <h3 className="text-xl font-semibold mb-5">Confirm this Ride to Start</h3>
            <div className=" flex items-center justify-between p-3 bg-yellow-400 rounded-lg">
                <div className="flex items-center gap-3">
                    <img className='h-9 w-9 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
                    <h2 className="text-lg font-medium capitalize">{props.ride?.user.fullName.firstName}</h2>
                </div>
                <h5 className="text-lg font-medium">2.2 KM</h5>
            </div>
            <div className="flex flex-col gap-2 justify-between items-center">
                <div className="w-full mt-5">
                    <div className="flex items-center gap-5 p-3 border-b-1">
                        <i className=" text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className="text-base font-medium">Pickup</h3>
                            <p className="text-sm text-gray-600 -mt-1">{props.ride?.pickup}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-b-1">
                        <i className="ri-map-pin-range-fill"></i>
                        <div>
                            <h3 className="text-base font-medium">Destination</h3>
                            <p className="text-sm text-gray-600 -mt-1">{props.ride?.destination}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3">
                    <i className="ri-currency-line"></i>
                        <div>
                            <h3 className="text-base font-medium">₹ {props.ride?.fare}</h3>
                            <p className="text-sm text-gray-600 -mt-1">Cash Payment</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 w-full">
                    <form onSubmit={submitHandler}>
                        <input value={otp} onChange={(e) => {setOtp(e.target.value)}} type="text" className="bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg mt-3 w-full" placeholder="Enter OTP" />

                        <button className="w-full mt-5 flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg">Confirm</button>
                        <button onClick={() => {
                            props.setRideConfirmPopupPanel(false);
                            props.setRidePopupPanel(false);
                        }} className="w-full mt-2 bg-red-700 text-white font-semibold p-3 rounded-lg">Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RideConfirmPopup;