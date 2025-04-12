import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <div className="bg-cover bg-bottom bg-[url(https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-3acc-61f7-a987-48afb944806d/raw?se=2025-04-12T17%3A39%3A43Z&sp=r&sv=2024-08-04&sr=b&scid=743039a1-f706-56e7-a4e7-5ae07d19f328&skoid=7c382de0-129f-486b-9922-6e4a89c6eb7d&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-12T11%3A02%3A13Z&ske=2025-04-13T11%3A02%3A13Z&sks=b&skv=2024-08-04&sig=un2tGXo0RO2f4PLkqpYIYD09611XAwyz24cmCannhhg%3D)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400">
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

export default Home;