import { Link } from "react-router-dom";

const Riding = () => {

    return (
        <div className="h-screen">
            <Link to='/home' className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full">
                <i className="text-lg font-medium right-2 top-2 ri-home-5-line"></i>
            </Link>
            <div className="h-1/2">
             <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className="h-1/2 p-4">
            <div className="flex items-center justify-between">
                <img className="h-12" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                    <div className="text-right">
                        <h2 className="text-lg font-medium">Sarthak</h2>
                        <h4 className="text-xl font-semibold -mt-1">MP 04 AB 1234</h4>
                        <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
                    </div>
                </div>
                <div className="w-full mt-5">
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
                <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding;