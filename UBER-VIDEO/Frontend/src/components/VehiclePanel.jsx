import React from "react";

const VehiclePanel = (props) => {
    return (
        <div>
            <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={() => {
                props.setVehiclePanel(false);
            }}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
            <h3 className="text-xl font-semibold mb-5">Choose a Vehicle</h3>
            <div 
                onClick={() => {
                    props.setVehiclePanel(false);
                    props.setConfirmRidePanel(true);
                    props.selectVehicle('car');
                }} 
                className="flex border-2 border-transparent active:border-black bg-gray-100 mb-2 rounded-xl w-full p-3 items-center justify-between"
            >
                <img className="h-10" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                <div className=" ml-2 w-1/2">
                    <h4 className="font-medium text-base">UberGo <span className="text-sm"><i className="ri-user-line"></i>4</span></h4>
                    <h5 className="font-medium text-sm">2 mins away</h5>
                    <p className="text-xs text-gray-600">Affordable, compact rides</p>
                </div>
                <h2 className="text-lg font-semibold">₹{props.fare.car}</h2>
            </div>
            <div 
                onClick={() => {
                    props.setVehiclePanel(false);
                    props.setConfirmRidePanel(true);
                    props.selectVehicle('moto');
                }} 
                className="flex border-2 border-transparent active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between"
            >
                <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                <div className="ml-2 w-1/2">
                    <h4 className="font-medium text-base">Moto<span className="text-sm"><i className="ri-user-line"></i>1</span></h4>
                    <h5 className="font-medium text-sm">3 mins away</h5>
                    <p className="text-xs text-gray-600">Affordable motorcycle rides</p>
                </div>
                <h2 className="text-lg font-semibold">₹{props.fare.moto}</h2>
            </div>
            {/* <div 
                onClick={() => {
                    props.setVehiclePanel(false);
                    props.setConfirmRidePanel(true);
                    props.selectVehicle('car');
                }} 
                className="flex border-2 border-transparent active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between"
            >
                <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1646663312/assets/76/4edafa-472b-4fe6-bf8a-74a894ad3dea/original/uberXL.png" alt="" />
                <div className="ml-2 w-1/2">
                    <h4 className="font-medium text-base">Uber Premier <span className="text-sm"><i className="ri-user-line"></i>4</span></h4>
                    <h5 className="font-medium text-sm">4 mins away</h5>
                    <p className="text-xs text-gray-600">Comfortable sedans, top-quality drivers</p>
                </div>
                <h2 className="text-lg font-semibold">₹{props.fare.car}</h2>
            </div> */}
            <div 
                onClick={() => {
                    props.setVehiclePanel(false);
                    props.setConfirmRidePanel(true);
                    props.selectVehicle('auto');
                }} 
                className="flex border-2 border-transparent active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between"
            >
                <img className="h-10" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                <div className="ml-2 w-1/2">
                    <h4 className="font-medium text-base">UberAuto <span className="text-sm"><i className="ri-user-line"></i>3</span></h4>
                    <h5 className="font-medium text-sm">2 mins away</h5>
                    <p className="text-xs text-gray-600">Affordable, compact rides</p>
                </div>
                <h2 className="text-lg font-semibold">₹{props.fare.auto}</h2>
            </div>
        </div>
    )
}

export default VehiclePanel;