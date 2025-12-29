const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    turf: { type: mongoose.Schema.Types.ObjectId, ref: "Turf" },
    date: { type: String }, // YYYY-MM-DD
    timeSlot: { type: String }, // "06:00-07:00"
    paid: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);
