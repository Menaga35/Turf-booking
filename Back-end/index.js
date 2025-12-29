// index.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./Config/db");

// Routers
const userRoutes = require("./Routes/userRoutes");
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
app.use("/api/turfs", turfRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/users", userRoutes);



// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const connectDB = require("./Config/db");

// dotenv.config();
// connectDB();

// const app = express();

// app.use(cors()); // ✅ allow frontend requests
// app.use(express.json()); // ✅ parse JSON body

// const userRoutes = require("./Routes/userRoutes");
// app.use("/api/users", userRoutes);
// app.use("/api/users", require("./Routes/userRoutes"));


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log("Server running on port " + PORT);
// });

