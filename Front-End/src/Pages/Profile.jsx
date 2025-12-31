import Navbar from "../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/profile.css";

export default function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <Navbar />

      <div className="profile-wrapper">
        <div className="profile-card">
          {!user ? (
            <>
              <h2>Not Logged In</h2>
              <p>Please login to view your profile</p>

              <Link to="/login" className="profile-btn">
                Go to Login
              </Link>
            </>
          ) : (
            <>
              <div className="profile-avatar">
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </div>

              <h2>{user?.name || "User"}</h2>
              <p className="profile-email">{user?.email || "No email"}</p>

              <div className="profile-actions">
                <Link to="/my-bookings" className="profile-btn">
                  My Bookings
                </Link>

                <button className="profile-btn logout" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
