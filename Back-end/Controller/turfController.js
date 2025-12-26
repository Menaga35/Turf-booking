const Turf = require("../Model/Turf");

// Add Turf (Admin)
exports.addTurf = async (req, res) => {
  try {
    const { name, location, pricePerHour, image } = req.body;

    const turf = await Turf.create({
      name,
      location,
      pricePerHour,
      image,
    });

    res.status(201).json({ msg: "Turf added successfully", turf });
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};

// Get All Turfs
exports.getAllTurfs = async (req, res) => {
  try {
    const turfs = await Turf.find();
    res.json(turfs);
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};
