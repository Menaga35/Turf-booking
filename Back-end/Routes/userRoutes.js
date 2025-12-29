
const { VerifyToken } = require("../Middleware/Token");
const express = require("express");
const router = express.Router();
const { Register, loginUser } = require("../Controller/userController");
router.post("/login", loginUser);
router.post("/register", Register);
router.get("/test", VerifyToken, (req, res) => {
  res.json({
    message: "Access granted",
    userId: req.user.id,
  });
});
