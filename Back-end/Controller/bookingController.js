const Booking = require("../Model/Booking");

// Define all possible slots
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

/* ===============================
   CREATE BOOKING (USER ONLY)
================================= */
exports.createBooking = async (req, res) => {
  try {
    const { turf, date, timeSlot } = req.body;

    if (!turf || !date || !timeSlot) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Check if slot is already booked
    const exists = await Booking.findOne({ turf, date, timeSlot });
    if (exists) {
      return res.status(400).json({ msg: "Slot already booked" });
    }

    // Create booking
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

/* ===============================
   GET LOGGED-IN USER BOOKINGS
================================= */
exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id }).populate("turf");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

/* ===============================
   GET ALL BOOKINGS (ADMIN)
================================= */
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user", "username email") // populate only username & email
      .populate("turf");

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

/* ===============================
   GET AVAILABLE SLOTS FOR TURF
================================= */
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
