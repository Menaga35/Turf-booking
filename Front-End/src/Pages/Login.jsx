// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import API from "../Utills/Api";
// // import "../CSS/Login.css";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       const { data } = await API.post("/user/login", { email, password });

//       localStorage.setItem("token", data.token);
//       localStorage.setItem("user", JSON.stringify(data.user));

//       navigate("/"); // home route
//     } catch (error) {
//       setError(error.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-card" onSubmit={handleLogin}>
//         <h2>Login</h2>

//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Email"
//           required
//         />

//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           required
//         />

//         {error && <p className="error-text">{error}</p>}

//         <button type="submit">Login</button>

//         <p>
//           Don’t have an account? <Link to="/register">Register</Link>
//         </p>
//       </form>
//     </div>
//   );
// }
