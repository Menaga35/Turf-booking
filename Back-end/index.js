const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./Config/db");

// Routers
const userRoutes = require("./Routes/userRoutes");
// Uncomment these if you have the route files
// const turfRoutes = require("./Routes/turfRoutes");
// const bookingRoutes = require("./Routes/bookingRoutes");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// Uncomment if you have the route files
// app.use("/api/turfs", turfRoutes);
// app.use("/api/bookings", bookingRoutes);

app.use("/api/users", userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
