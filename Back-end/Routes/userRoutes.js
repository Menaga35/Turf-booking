const express = require("express");

const router = express.Router();

const { Register, Loginuser } = require("../Controller/userController");

router.post("/register", Register);

router.post("/login", Loginuser);

module.exports = router;
