// import Navbar from "../Components/Navbar";
// import { useNavigate, Link } from "react-router-dom";
// import "../CSS/profile.css";

// export default function Profile() {
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem("user"));

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/");
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="profile-wrapper">
//         <div className="profile-card">
//           {/* Avatar */}
//           <div className="profile-avatar">
//             {user?.name?.charAt(0).toUpperCase() || "U"}
//           </div>

//           <h2>{user?.name || "User"}</h2>
//           <p className="profile-email">{user?.email}</p>

//           <div className="profile-actions">
//             <Link to="/my-bookings" className="profile-btn">
//               My Bookings
//             </Link>

//             <button className="profile-btn logout" onClick={handleLogout}>
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
