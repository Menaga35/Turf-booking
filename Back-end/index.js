const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./Config/db");

const userRoutes = require("./Routes/userRoutes");
const turfRoutes = require("./Routes/turfRoutes");
const bookingRoutes = require("./Routes/bookingRoutes");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/turfs", turfRoutes);
app.use("/api/bookings", bookingRoutes);

// test route
app.get("/api", (req, res) => {
  res.send("Backend running on Vercel ✅");
});

// REQUIRED for Vercel
module.exports = app;
