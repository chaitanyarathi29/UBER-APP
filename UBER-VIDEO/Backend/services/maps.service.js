const axios = require('axios');
const dotenv = require('dotenv');
const captainModel = require('../models/captain.model');

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_KEY;
    dotenv.config();
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try{
        const response = await axios.get(url);
        if(response.data.status === 'OK'){
            const location = response.data.results[ 0 ].geometry.location;
            return {
                lng: location.lng,
                lat: location.lat
            };
        }else{
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error){
        console.error(error);
        throw error;
    }
}

module.exports.getDistanceTime = async (origin, destination) => {
    if(!origin || !destination){
        throw new Error('Origin and Destination are Required');
    }
    dotenv.config();
    const apiKey = process.env.GOOGLE_MAPS_KEY;

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;
    const response = await axios.get(url); 
    try {
        if(response.data.status === 'OK'){

            if(response.data.rows[0].elements[0].status === 'ZERO_RESULTS') {
                throw new Error('No routes found');
            } 

            return response.data.rows[ 0 ].elements[ 0 ];   
        }
        else{
            throw new Error('Unable to fetch distance and time');
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports.getAutoCompleteSuggestions = async (input) => {
    if(!input){
        throw new Error('Input is Required');
    }
    dotenv.config();
    const apiKey = process.env.GOOGLE_MAPS_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if(response.data.status === 'OK'){
            return response.data.predictions;
        }else{
            throw new Error('Unable to fetch suggestions');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports.getCaptainIntheRadius = async (lng, lat, radius) => {

    const captains = await captainModel.find({
        location: {
            $near: {
                $geometry: { type: "Point", coordinates: [lng, lat] },
                $maxDistance: radius * 1000
            }
        }
    });

    console.log(captains);

    return captains;

}
