const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');
const mapService = require('../services/maps.service');
const { sendMessageToSocketId } = require('../socket');
const rideModel = require('../models/ride.model');

module.exports.createRide = async (req, res) => {
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { userId, pickup, destination, vehicleType } = req.body;

    try {
        const ride = await rideService.createRide({
            user: req.user._id,
            pickup,
            destination,
            vehicleType
        }); 

        const pickupCoordinates = await mapService.getAddressCoordinate(pickup);

        console.log(pickupCoordinates);

        const captainInRadius = await mapService.getCaptainIntheRadius(pickupCoordinates.lng, pickupCoordinates.lat, 2);

        ride.otp = "";

        const rideWithUser = await rideModel.findById(ride._id).populate('user');
        
        console.log(captainInRadius);
        

        captainInRadius.map(captain => {
            sendMessageToSocketId(captain.socketId, {
                event: 'new-ride',
                data: rideWithUser
            });
        })

        return res.status(201).json(ride);

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }

}

module.exports.getFare = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination } = req.query;

    try {
        const fare = await rideService.getFare(pickup, destination);
        res.status(200).json(fare);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports.confirmRide = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId } = req.body;

    try {
        const ride = await rideService.confirmRide({rideId, captain: req.captain});

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-confirmed',
            data: ride
        });

        return res.status(200).json(ride);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

module.exports.startRide = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId } = req.query;
    const { otp } = req.query;

    try {
        const ride = await rideService.startRide({
            rideId,
            otp,
            captain: req.captain
        }); 

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-started',
            data: ride
        });

        if (!ride) {
            return res.status(404).json({ message: 'Ride not found or invalid OTP' });
        }

        return res.status(200).json(ride);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

