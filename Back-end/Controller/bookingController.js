const Booking = require("../Model/Booking"); // USE ONLY ONE PATH

// Create booking
exports.createBooking = async (req, res) => {
  try {
    const { turf, date, timeSlot } = req.body;

    const exists = await Booking.findOne({ turf, date, timeSlot });
    if (exists) {
      return res.status(400).json({ msg: "Slot already booked" });
    }

    const booking = await Booking.create({
      user: req.user.id,
      turf,
      date,
      timeSlot,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

// Get logged-in user's bookings
exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate("turf");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

// Admin: Get all bookings
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("user").populate("turf");

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};
