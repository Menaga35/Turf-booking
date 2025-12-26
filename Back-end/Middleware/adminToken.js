// Admin Middleware
module.exports = (req, res, next) => {
  // Make sure authMiddleware ran first and set req.user
  if (!req.user) {
    return res.status(401).json({ msg: "Not authenticated" });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({ msg: "Access denied. Admins only" });
  }

  // User is admin, proceed
  next();
};
