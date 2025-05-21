import React, { useRef, useState } from "react";
import{ useGSAP } from "@gsap/react";
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRidePanel from "../components/ConfirmedVehiclePanel";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
import axios from "axios";

const Home = () => {

    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [panelOpen, setPanelOpen] = useState(false);
    const panelRef = useRef(null);
    const vehiclePanelRef = useRef(null);
    const confirmRideRef = useRef(null);
    const vehicleFoundRef = useRef(null);
    const driverFoundRef = useRef(null);
    const [vehiclePanel, setVehiclePanel] = useState(false);
    const [confirmRidePanel, setConfirmRidePanel] = useState(false);
    const [vehicleFound, setVehicleFound] = useState(false);
    const [driverFound, setDriverFound] = useState(false);
    const [pickupSuggestions, setPickupSuggestions] = useState([]);
    const [destinationSuggestions, setDestinationSuggestions] = useState([]);
    const [activeField, setActiveField] = useState(null);
    const [fare, setFare] = useState(0);
    const [vehicleType, setVehicleType] = useState(null);

    const handlePickupChange = async (e) => {
        setPickup(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }

            })
            setPickupSuggestions(response.data)
        } catch{
            
        }
    }
    const handleDestinationChange = async (e) => {
        setDestination(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setDestinationSuggestions(response.data)
        } catch {
            
        }
    }

    const submitHandler = () => {
        e.preventDefault();

    }

    useGSAP(function(){
        if(panelOpen){
            gsap.to(panelRef.current,{
                height:'70%'
            })
        }else{
            gsap.to(panelRef.current,{
                height:'0%'
            })
        }
    },[panelOpen]);

    useGSAP(function(){
        if(vehiclePanel){
            gsap.to(vehiclePanelRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(vehiclePanelRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[vehiclePanel])

    useGSAP(function(){
        if(confirmRidePanel){
            gsap.to(confirmRideRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(confirmRideRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[confirmRidePanel])

    useGSAP(function(){
        if(vehicleFound){
            gsap.to(vehicleFoundRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(vehicleFoundRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[vehicleFound])

    useGSAP(function(){
        if(driverFound){
            gsap.to(driverFoundRef.current,{
                transform:'translateY(0)'
            })
        }else{
            gsap.to(driverFoundRef.current,{
                transform:'translateY(100%)'
            })
        }
    },[driverFound])

    async function findTrip() {
        setPanelOpen(false);
        setVehiclePanel(true);

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
            params: { pickup: pickup.description, destination: destination.description },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }) 
        setFare(response.data);
    }
           
    async function createRide() { 
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm-ride`, {
            pickup,
            destination,
            vehicleType
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        console.log(response.data);
    }
    return (
        <div className="h-screen relative overflow-hidden" >
            <img className="w-16 absolute left-5 top-5" src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" alt="" />

            <div onClick={() => {
                setVehiclePanel(false);
            }} className="h-screen w-screen">
                <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className="flex flex-col justify-end absolute h-screen top-0 w-full">
                <div className="h-[30%] bg-white p-5 relative">
                    <h5 onClick={() => {
                        setPanelOpen(!panelOpen);
                    }} className="absolute right-6 top-6 text-2xl">
                        <i className="ri-arrow-down-wide-line"></i>
                    </h5>
                    <h4 className="text-xl font-semibold">Find a Trip</h4>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <div className="line absolute h-16 w-1 top-[39%] left-10 bg-gray-900 rounded-full"></div>
                        <input
                            onClick={() => {
                                setPanelOpen(true);
                                setActiveField('pickup')
                            }}
                            value={pickup?.description || pickup || ''}
                            onChange={handlePickupChange}
                            className="bg-[#eee] px-12 py-2 text-base rounded-lg mt-3 w-full" 
                            type="text" 
                            placeholder="Add a pickup Location"
                        />
                        <input 
                            onClick={() => {
                                setPanelOpen(true);
                                setActiveField('destination')
                            }}
                            onChange={handleDestinationChange}
                            value={destination?.description || destination || ''}
                            className="bg-[#eee] px-12 py-2 text-base rounded-lg mt-3 w-full" 
                            type="text" 
                            placeholder="Enter Your Destination" 
                        />
                    </form> 
                    <button 
                        className="mt-4 w-full bg-green-600 text-white font-semibold p-2 rounded-lg"
                        onClick={() => {
                            findTrip();
                        }}
                    >
                        Find Trip
                    </button>
                </div>
                <div ref={panelRef} className="bg-white h-0">
                    <LocationSearchPanel
                        suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                        setVehiclePanel={setVehiclePanel}
                        setPanelOpen={setPanelOpen}
                        setPickup={setPickup}
                        setDestination={setDestination}
                        activeField={activeField}
                    />
                </div>
            </div>
            <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 px-3 py-10 pt-12 translate-y-full bg-white">
                {vehiclePanel && <VehiclePanel 
                    selectVehicle={setVehicleType} 
                    fare={fare} 
                    setConfirmRidePanel={setConfirmRidePanel} 
                    setVehiclePanel={setVehiclePanel}
                />}
            </div>
            <div ref={confirmRideRef} className="fixed w-full z-10 bottom-0 px-3 py-6 pt-12 translate-y-full bg-white">
                {confirmRidePanel && <ConfirmedRidePanel 
                    pickup={pickup} 
                    destination={destination} 
                    fare={fare} 
                    vehicleType={vehicleType}
                    createRide={createRide} 
                    setConfirmRidePanel={setConfirmRidePanel} 
                    setVehicleFound={setVehicleFound}
                />}
            </div>
            <div ref={vehicleFoundRef} className="fixed w-full z-10 bottom-0 px-3 py-6 pt-12 translate-y-full bg-white">
                {vehicleFound && <LookingForDriver 
                    pickup={pickup} 
                    destination={destination} 
                    fare={fare} 
                    vehicleType={vehicleType}
                    createRide={createRide}
                    setVehicleFound={setVehicleFound} 
                    setDriverFound={setDriverFound}
                />}
            </div>
            <div ref={driverFoundRef} className="fixed w-full z-10 bottom-0 px-3 py-6 pt-12 bg-white">
                {driverFound && <WaitingForDriver 
                    setDriverFound={setDriverFound}
                />}
            </div>
        </div>
    )

}

export default Home;