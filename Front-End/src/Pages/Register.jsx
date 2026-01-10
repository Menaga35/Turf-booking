// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import API from "../Utills/Api";
// import "../CSS/register.css";

// export default function Register() {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post("/user/register", {
//         username: name,
//         email,
//         password,
//       });
//       navigate("/login");
//     } catch (err) {
//       alert(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <form onSubmit={handleRegister}>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <input value={email} onChange={(e) => setEmail(e.target.value)} />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button>Register</button>
//       <Link to="/login">Login</Link>
//     </form>
//   );
// }
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../Utills/api";
import "../CSS/login.css";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/user/register", {
        username: name,
        email,
        password,
      });

      alert("Registered Successfully");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-wrapper">
      <form className="auth-card" onSubmit={handleRegister}>
        <h2 className="auth-title">Create Account</h2>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          required
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />

        <button type="submit" className="auth-btn">
          Sign up
        </button>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
