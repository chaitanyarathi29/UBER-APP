
const RidePopup = (props) => {

    return (
        <div>
            <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={() => {
                props.setRidePopupPanel(false);
            }}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
            <h3 className="text-xl font-semibold mb-5">New Ride Available!</h3>
            <div className=" flex items-center justify-between p-3 bg-yellow-400 rounded-lg">
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
                <div className="flex items-center w-full mt-5 justify-between">
                    <button onClick={() => {
                        props.setRidePopupPanel(false);
                    }} className="bg-gray-300 text-gray-700 font-semibold p-3 px-11 rounded-lg">Ignore</button>
                    <button onClick={() => {
                        props.setRideConfirmPopupPanel(true);
                        props.setRidePopupPanel(false);
                    }} className="bg-green-600 text-white  font-semibold p-3 px-11 rounded-lg">Accept</button>
                </div>
            </div>
        </div>
    )
}

export default RidePopup;