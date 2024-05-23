const express = require("express");
const Hotel = require("../models/AddHotel.model.js");
const router = express.Router();
const {getHotels, getHotel, createHotel, updateHotel, deleteHotel} = require('../controllers/Hotel.controller.js');


router.get('/', getHotels);
router.get("/:id", getHotel);

router.post("/", createHotel);

// update a Hotel
router.put("/:id", updateHotel);

// delete a Hotel
router.delete("/:id", deleteHotel);




module.exports = router;