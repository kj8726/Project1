const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    destination: String,
    date: String,
    travelers: {
        type: Number,
        default: 1
    },
    notes: String,
    username: String // Optional: to track which user created the booking
});

module.exports = mongoose.model("Booking", bookingSchema);
