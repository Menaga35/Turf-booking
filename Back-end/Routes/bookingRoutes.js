const express = require("express");
const {
  createBooking,
  getUserBookings,
  getAllBookings,
  getAvailableSlots,
} = require("../Controller/bookingController");

const authMiddleware = require("../Middleware/Token");

const router = express.Router();

// Protected routes
router.post("/", authMiddleware, createBooking);
router.get("/my-bookings", authMiddleware, getUserBookings);
router.get("/available-slots", authMiddleware, getAvailableSlots);

// Admin-only route (can add adminMiddleware later)
router.get("/", authMiddleware, getAllBookings);

module.exports = router;
