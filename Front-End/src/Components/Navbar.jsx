import { useEffect, useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../CSS/nav.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const user = JSON.parse(localStorage.getItem("user"));
  const firstLetter = user?.name?.charAt(0).toUpperCase() || "U";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* LEFT */}
        <div className="nav-left">
          <div className="logo-box">TS</div>
          <span className="brand-name">TurfSpot</span>
        </div>

        {/* CENTER */}
        <div className="nav-center">
          <Link to="/">Home</Link>
          <Link to="/turfs">Turfs</Link>
          <Link to="/my-bookings">My Bookings</Link>
        </div>

        {/* RIGHT */}
        <div className="nav-right" ref={dropdownRef}>
          <span className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </span>

          {/* PROFILE CIRCLE */}
          <div className="profile-circle" onClick={() => setOpen(!open)}>
            {firstLetter}
          </div>

          {/* DROPDOWN */}
          {open && (
            <div className="profile-dropdown">
              <Link to="/profile" onClick={() => setOpen(false)}>
                Profile
              </Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
