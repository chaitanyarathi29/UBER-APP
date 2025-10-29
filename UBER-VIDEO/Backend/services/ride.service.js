const rideModel = require('../models/ride.model');
const mapsService = require('../services/maps.service');
const crypto = require('crypto');
const { sendMessageToSocketId } = require('../socket');

async function getFare(pickup, destination){

    if (!pickup || !destination) {
        throw new Error('Pickup and destination are required');
    }

    const distanceTime = await mapsService.getDistanceTime(pickup, destination);

    const baseFare = {
        auto: 30,
        car: 50,
        moto: 20
    };

    const perKmRate = {
        auto: 10,
        car: 15,
        moto: 8
    };

    const perMinuteRate = {
        auto: 2,
        car: 3,
        moto: 1.5
    };



    const fare = {
        auto: Math.round(baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + ((distanceTime.duration.value / 60) * perMinuteRate.auto)),
        car: Math.round(baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60) * perMinuteRate.car)),
        moto: Math.round(baseFare.moto + ((distanceTime.distance.value / 1000) * perKmRate.moto) + ((distanceTime.duration.value / 60) * perMinuteRate.moto))
    };

    return fare;

}

module.exports.getFare = getFare;

function getOTP(num){
    const otp = crypto.randomInt(Math.pow(10, num-1), Math.pow(10, num)).toString();
    return otp;
}

module.exports.createRide = async ({ 
    user, pickup, destination, vehicleType
    }) => {
    if(!user || !pickup || !destination || !vehicleType){
        throw new Error('User, pickup, destination and vehicleType are required');
    }

    const fareDetails = await getFare(pickup, destination);

    const ride = rideModel.create({
        user,
        pickup,
        destination,
        fare: fareDetails[vehicleType],
        otp: getOTP(6),
    });

    return ride;
}

module.exports.confirmRide = async ({ rideId, captain }) => {
    if(!rideId){
        throw new Error('Ride ID and captain are required');
    }

    await rideModel.findOneAndUpdate(
        { _id: rideId }, {
        captain: captain._id,
        status: 'accepted'
    });

    const ride = await rideModel.findOne({ _id: rideId }).populate('user').populate('captain').select('+otp');

    if (!ride) {
        throw new Error('Ride not found');
    }

    return ride; 
}

module.exports.startRide = async ({ rideId, otp, captain }) => {
    if(!rideId || !otp || !captain){
        throw new Error('Ride ID, OTP and captain are required');
    }

    const ride = await rideModel.findOne({
        _id: rideId
    }).populate('user').populate('captain').select('+otp');

    if (!ride) {
        throw new Error('Ride not found');
    }

    if (ride.otp !== otp) {
        throw new Error('Invalid OTP');
    }   

    if( ride.status !== 'accepted') {
        throw new Error('Ride is not in accepted status');
    }

    await rideModel.findOneAndUpdate(
        { _id: rideId }, {
            status: 'ongoing'
        }
    )

    sendMessageToSocketId(ride.user.socketId, {
        event: 'ride-started',
        data: ride
    });

    return ride;
}