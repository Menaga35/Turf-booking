const Booking = require("../models/Booking");

// Dummy Payment - Mark booking as paid
exports.payBooking = async (req, res) => {
  try {
    const { bookingId } = req.body;

    // Find booking
    const booking = await Booking.findById(bookingId);
    if (!booking) return res.status(404).json({ msg: "Booking not found" });

    // Check if already paid
    if (booking.paid)
      return res.status(400).json({ msg: "Booking already paid" });

    // Mark as paid
    booking.paid = true;
    await booking.save();

    res.json({ msg: "Payment successful", booking });
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};
