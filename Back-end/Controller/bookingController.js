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
const Booking = require("../Model/Booking");

const ALL_SLOTS = [
  "06:00-07:00",
  "07:00-08:00",
  "08:00-09:00",
  "09:00-10:00",
  "16:00-17:00",
  "17:00-18:00",
  "18:00-19:00",
  "19:00-20:00",
];

// GET AVAILABLE SLOTS
exports.getAvailableSlots = async (req, res) => {
  try {
    const { turfId, date } = req.query;

    if (!turfId || !date) {
      return res.status(400).json({ msg: "turfId and date are required" });
    }

    // Find booked slots
    const bookings = await Booking.find({ turf: turfId, date });

    const bookedSlots = bookings.map((b) => b.timeSlot);

    // Filter available slots
    const availableSlots = ALL_SLOTS.filter(
      (slot) => !bookedSlots.includes(slot)
    );

    res.json({ availableSlots });
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};
