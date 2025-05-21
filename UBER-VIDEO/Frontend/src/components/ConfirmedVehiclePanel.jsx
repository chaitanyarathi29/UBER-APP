import React from "react"

const ConfirmedRidePanel = (props) => {
    return (
        <div className="">
            <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={() => {
                props.setConfirmRidePanel(false);
            }}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
            <h3 className="text-xl font-semibold mb-5">Looking for nearby drivers</h3>
            <div className="flex flex-col gap-2 justify-between items-center">
                <img className="h-26" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                <div className="w-full mt-5">
                    <div className="flex items-center gap-5 p-3 border-b-1">
                        <i className=" text-lg ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className="text-base font-medium">562/11-A</h3>
                            <p className="text-sm text-gray-600 -mt-1">{props.pickup.description}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-b-1">
                        <i className="ri-map-pin-range-fill"></i>
                        <div>
                            <h3 className="text-base font-medium">New Teaching Block</h3>
                            <p className="text-sm text-gray-600 -mt-1">{props.destination.description}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3">
                    <i className="ri-currency-line"></i>
                        <div>
                            <h3 className="text-base font-medium">₹ {props.fare[props.vehicleType]}</h3>
                            <p className="text-sm text-gray-600 -mt-1">Cash Payment</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => {
                    props.setConfirmRidePanel(false);
                    props.setVehicleFound(true);
                    props.createRide();
                }} className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">Confirm</button>
            </div>
        </div>
    )
}

export default ConfirmedRidePanel;