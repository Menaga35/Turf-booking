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

// ROUTES
app.use("/api/users", userRoutes);
app.use("/api/turfs", turfRoutes);
app.use("/api/bookings", bookingRoutes);

// TEST ROUTE
app.get("/api", (req, res) => {
  res.send("Backend running ✅");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
