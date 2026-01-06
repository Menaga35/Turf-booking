const jwt = require("jsonwebtoken");
const User = require("../Model/User");

const authMiddleware = async (req, res, next) => {
  try {
    // Get token from headers
    const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>

    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // Attach user to request
    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      return res.status(401).json({ message: "User not found" });
    }

    next(); // allow request to continue
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authMiddleware;
