const express = require("express");
const router = express.Router();

const {
  createBooking,
  getUserBookings,
  getAvailableSlots,
} = require("../Controller/bookingController");

const authMiddleware = require("../Middleware/Token");

// Create booking
router.post("/", authMiddleware, createBooking);

// Get logged-in user's bookings
router.get("/my-bookings", authMiddleware, getUserBookings);

// Get available slots
router.get("/slots", getAvailableSlots);

module.exports = router;
