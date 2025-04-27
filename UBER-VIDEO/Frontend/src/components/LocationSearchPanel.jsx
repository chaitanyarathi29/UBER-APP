import React  from "react";

const LocationSearchPanel = (props) => {
    console.log(props);
    const locations = [
        "369 Plowden Road Near IDBI Bank Opp Red Cross Hospital, Mhow",
        "House No.19B Sagar Garden Homes, Deepak Society Chunabhatti, Bhopal",
        "New Teaching Block, MANIT, Bhopal",
        "25 Main Street Cannaught Road, Mhow",
        "Badminton Court, Sports Complex MANIT, Bhopal",
    ]

    
    return (
        <div>
            {
                locations.map(function(element, index){
                    return <div key={index} onClick={() => {
                        props.setVehiclePanel(true);
                        props.setPanelOpen(false);
                    }} className="flex gap-2 border-2 p-3 border-white active:border-black rounded-xl items-center justify-start my-2">
                    <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full " ><i className='ri-map-pin-fill'></i></h2>
                    <h4 className="font-medium">{element}</h4>
                </div>
                })
            }
        </div>
    )
}

export default LocationSearchPanel;