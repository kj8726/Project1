const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: String,
  price: Number,
  description: String,
  image: String,
  hotels: [String], // array of hotel names
  hotelLinks: [String] // array of URLs corresponding to each hotel
});

module.exports = mongoose.model('Destination', destinationSchema);
