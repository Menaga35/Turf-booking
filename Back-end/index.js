const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("../Config/db");

const userRoutes = require("../Routes/userRoutes");
const turfRoutes = require("../Routes/turfRoutes");
const bookingRoutes = require("../Routes/bookingRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// connect DB
connectDB();

app.get("/", (req, res) => {
  res.send("Backend running on Vercel ✅");
});

app.use("/api/user", userRoutes);
app.use("/api/turfs", turfRoutes);
app.use("/api/bookings", bookingRoutes);

// ❌ DO NOT use app.listen()
module.exports = app;
