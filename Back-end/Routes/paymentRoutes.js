const express = require("express");
const router = express.Router();
const { payBooking } = require("../Controller/paymentController");
const authMiddleware = require("../Middleware/Token");

// Dummy payment route
router.post("/pay", authMiddleware, payBooking);

module.exports = router;
