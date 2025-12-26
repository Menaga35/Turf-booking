const express = require("express");
const router = express.Router();
const { addTurf, getAllTurfs } = require("../Controller/turfController");
const { getAllBookings } = require("../Controller/bookingController");
const authMiddleware = require("../Middleware/Token")

// Middleware to allow only admin
const adminMiddleware = (req, res, next) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ msg: "Access denied" });
  next();
};

router.post("/turfs", authMiddleware, adminMiddleware, addTurf);
router.get("/turfs", authMiddleware, adminMiddleware, getAllTurfs);
router.get("/bookings", authMiddleware, adminMiddleware, getAllBookings);

module.exports = router;
