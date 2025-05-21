const mongoose = require('mongoose');


const rideSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    captain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Captain'
    },
    pickup: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    distance: {
        type: Number,
    },
    duration: {
        type: Number,
    },
    fare: {
        type: Number,
        required: true
    },
    paymentId: {
        type: String,
    },
    orderId: {
        type: String,
    },
    signature: {
        type: String,
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'ongoing', 'completed', 'cancelled'],
        default: 'pending'
    },
    otp: {
        type: String,
        required: true,
        select: false,
    }
});

module.exports = mongoose.model('ride', rideSchema);
