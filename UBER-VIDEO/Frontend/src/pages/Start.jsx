import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
        <div className="bg-cover bg-bottom bg-[url(C:\UBER-APP\UBER-VIDEO\Frontend\src\pages\start.png)] h-screen pt-8 flex justify-between flex-col w-full">
            <img className="w-20 ml-8" src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />
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