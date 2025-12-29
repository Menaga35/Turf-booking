
// const { VerifyToken } = require("../Middleware/Token");
// const express = require("express");
// const router = express.Router();
// const { Register, loginUser } = require("../Controller/userController");
// router.post("/login", loginUser);
// router.post("/register", Register);
// router.get("/test", VerifyToken, (req, res) => {
//   res.json({
//     message: "Access granted",
//     userId: req.user.id,
//   });
// });
const express = require("express");
const router = express.Router();

// Import controllers and middleware
let VerifyToken, Register, loginUser;
try {
  ({ VerifyToken } = require("../Middleware/Token"));
} catch (err) {
  console.error("Failed to import VerifyToken:", err.message);
}

try {
  ({ Register, loginUser } = require("../Controller/userController"));
} catch (err) {
  console.error("Failed to import userController functions:", err.message);
}

// Helper to safely add a route
function safeRoute(handler, name) {
  if (typeof handler !== "function") {
    console.warn(`Warning: ${name} is not a function. Route will not work.`);
    return (req, res) =>
      res.status(500).json({ message: `${name} handler missing` });
  }
  return handler;
}

// Routes
router.post("/login", safeRoute(loginUser, "loginUser"));
router.post("/register", safeRoute(Register, "Register"));
router.get("/test", safeRoute(VerifyToken, "VerifyToken"), (req, res) => {
  res.json({
    message: "Access granted",
    userId: req.user?.id || null,
  });
});

module.exports = router;
