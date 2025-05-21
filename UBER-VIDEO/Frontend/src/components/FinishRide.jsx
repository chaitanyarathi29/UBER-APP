import React from "react";
import { Link } from "react-router-dom";

const FinishRide = (props) => {

    return (
        <div>
            <h5 className="p-1 text-center w-[93%] absolute top-0" 
            onClick={() => {
                console.log(props.finishRidePanel);
                props.setFinishRidePanel(false);
                console.log(props.finishRidePanel);
            }}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
            <h3 className="text-xl font-semibold mb-5">Finish this Ride</h3>
            <div className=" flex items-center justify-between p-4 border-2 border-yellow-400 rounded-lg">
                <div className="flex items-center gap-3">
                    <img className='h-9 w-9 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCmjpfRjUsQ72xSWikidbgaI1w&s" alt="" />
                    <h2 className="text-lg font-medium">Chaitanya Rathi</h2>
                </div>
                <h5 className="text-lg font-medium">2.2 KM</h5>
            </div>
            <div className="flex flex-col gap-2 justify-between items-center">
                <div className="w-full mt-5">
                    <div className="flex items-center gap-5 p-3 border-b-1">
                        <i className=" text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className="text-base font-medium">562/11-A</h3>
                            <p className="text-sm text-gray-600 -mt-1">Kankariya Talab, Bhopal</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-b-1">
                        <i className="ri-map-pin-range-fill"></i>
                        <div>
                            <h3 className="text-base font-medium">New Teaching Block</h3>
                            <p className="text-sm text-gray-600 -mt-1">MANIT Bhopal</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3">
                    <i className="ri-currency-line"></i>
                        <div>
                            <h3 className="text-base font-medium">₹ 193.20</h3>
                            <p className="text-sm text-gray-600 -mt-1">Cash Payment</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 w-full">
                    <Link to='/captain-home' className="w-full mt-5 flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg">Complete Ride</Link>
                </div>
            </div>
        </div>
    )
}

export default FinishRide;