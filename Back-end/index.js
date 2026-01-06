// Import modules
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./Config/db"); // CommonJS import

// Import routes
const userRoutes = require("./Routes/userRoutes");
const turfRoutes = require("./Routes/turfRoutes");
const bookingRoutes = require("./Routes/bookingRoutes");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB(); // <-- Should print "MongoDB Connected ✅"

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());


app.use("/api/user", userRoutes);
app.use("/api/turfs", turfRoutes);
app.use("/api/bookings", bookingRoutes);


// const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });
