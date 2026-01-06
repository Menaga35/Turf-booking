const Turf = require("../Model/Turf");

const getTurfs = async (req, res) => {
  try {
    const turfs = await Turf.find();
    res.status(200).json(turfs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addTurf = async (req, res) => {
  try {
    const turf = await Turf.create(req.body);
    res.status(201).json(turf);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTurfs, addTurf };
