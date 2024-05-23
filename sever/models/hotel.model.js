const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

const hotelSchema = mongoose.Schema({
  location: { type: String, required: true },
  email: { type: String, required: false },
  phone: { type: Number, required: false },
  devise: { type: String, required: false },
  hotelName: { type: String, required: [true, "Please enter hotel name"], },
  imageUrl: { type: String, required: false },
  userId: { type: String, required: false },
  price: { type: Number, required: true }
},
{  timestamps: true }
);

const Hotel = mongoose.model('Hotel', hotelSchema);
module.exports = Hotel;

// module.exports = mongoose.model('Hotel', hotelSchema);