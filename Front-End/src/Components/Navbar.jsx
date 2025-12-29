import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../CSS/nav.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

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
          <Link to="/owner">Become an Owner</Link>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          <span className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </span>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
