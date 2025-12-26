const mongoose = require("mongoose");

const turfSchema = new mongoose.Schema({
  name: String,
  location: String,
  pricePerHour: Number,
});

module.exports = mongoose.model("Turf", turfSchema);
