const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    destination: String,
    date: String
});

module.exports = mongoose.model("Booking", bookingSchema);
