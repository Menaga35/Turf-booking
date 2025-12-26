const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../Controller/userController");

const authMiddleware = require("../Middleware/Token");

// Register new user
router.post("/register", registerUser);

// Login user
router.post("/login", loginUser);

// Get logged-in user profile
router.get("/profile", authMiddleware, getUserProfile);

module.exports = router;
