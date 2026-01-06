const express = require("express");
const { Register, loginUser } = require("../Controller/userController");

const router = express.Router();

router.post("/register", Register);
router.post("/login", loginUser);

module.exports = router;
