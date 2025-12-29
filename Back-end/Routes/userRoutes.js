
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
const { Register, loginUser } = require("../Controller/userController");
const { VerifyToken } = require("../Middleware/Token");

// Helper to ensure a handler is a function
function ensureFunction(fn, name) {
  if (typeof fn !== "function") {
    throw new TypeError(`${name} must be a function`);
  }
  return fn;
}

// Routes
router.post("/login", ensureFunction(loginUser, "loginUser"));
router.post("/register", ensureFunction(Register, "Register"));
router.get("/test", ensureFunction(VerifyToken, "VerifyToken"), (req, res) => {
  res.json({
    message: "Access granted",
    userId: req.user?.id || null,
  });
});

module.exports = router;
