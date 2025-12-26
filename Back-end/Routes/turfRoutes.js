const express = require("express");
const router = express.Router();
const { addTurf, getAllTurfs } = require("../Controller/turfController");
const authMiddleware = require("../Middleware/Token");
const adminMiddleware = require("../Middleware/adminToken");

// Routes

// Get all turfs (accessible by all authenticated users)
router.get("/", authMiddleware, getAllTurfs);

// Add new turf (admin only)
router.post("/", authMiddleware, adminMiddleware, addTurf);

module.exports = router;
