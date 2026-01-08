import { useNavigate, Link } from "react-router-dom";
import "../CSS/nav.css";

export default function Navbar() {
  const navigate = useNavigate();

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
          <div className="logo-box">PZ</div>
          <span className="brand-name">PlayZone Turf</span>
        </div>

        {/* CENTER */}
        <div className="nav-center">
          <Link to="/">Home</Link>
          <Link to="/turfs">Turfs</Link>
          <Link to="/my-bookings">My Bookings</Link>
        </div>

        {/* RIGHT */}
        <div className="nav-right">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
