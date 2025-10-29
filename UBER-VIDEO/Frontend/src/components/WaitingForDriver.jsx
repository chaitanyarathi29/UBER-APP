import React from "react";

const WaitingForDriver = (props) => {

    return (
        <div>
            {console.log(props.ride)}
            <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={() => {
                props.setDriverFound(false);
            }}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
                <div className="flex items-center justify-between">
                <img className="h-12" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                    <div className="text-right">
                        <h2 className="text-lg font-medium capitalize">{props.ride?.captain.fullname.firstname}</h2>
                        <h4 className="text-xl font-semibold uppercase">{props.ride?.captain.vehicle.plate}</h4>
                        <p className="text-sm text-gray-600 capitalize">{props.ride?.captain.vehicle.vehicleType}</p>
                        <h1 className="text-lg font-semibold uppercase">{props.ride?.otp}</h1>
                    </div>
                </div>
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
        </div>
    )
}

export default WaitingForDriver;