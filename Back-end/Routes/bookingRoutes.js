const express = require("express");
const {
  createBooking,
  getUserBookings,
} = require("../Controller/bookingController");
const auth = require("../Middleware/Token");
const router = express.Router();

router.post("/", auth, createBooking);
router.get("/my-bookings", auth, getUserBookings);

module.exports = router;
