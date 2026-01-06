const express = require("express");
const { getTurfs, addTurf } = require("../Controller/turfController");

const router = express.Router();

router.get("/", getTurfs);
router.post("/", addTurf);

module.exports = router;
