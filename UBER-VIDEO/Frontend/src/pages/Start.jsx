import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
        <div className=" bg-[url(https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_552,w_552/v1719582698/assets/51/c17bec-b3cc-4bfe-9d77-9f7d735c7bee/original/Hero02_GR_Ring%28SM%29_420x420.png)] h-screen pt-8 flex justify-between flex-col w-full">
            <img className="w-22 ml-70" src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
            <div className="bg-white pb-7 py-4 px-4">
            <h2 className="text-3xl font-bold">Get Started with Uber</h2>
            <Link to='/login' className="flex items-center w-full justify-center
             bg-black text-white py-3 rounded mt-5">Continue</Link>
            </div>
        </div>
    </div>
  );
}

export default Start;