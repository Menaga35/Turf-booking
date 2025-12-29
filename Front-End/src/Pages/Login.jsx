import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../Utills/Api";
import "../CSS/login.css"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { data } = await API.post("/login", { email, password });

      // store token
      localStorage.setItem("token", data.token || "dummy-token");

      // store user
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
        })
      );

      navigate("/"); // navigate to Turfs page
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleLogin}>
        <h2>Welcome Back</h2>
        <p>Login to continue</p>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">Login</button>

        <p>
          Don’t have an account? <Link to="/register">Sign up</Link>
        </p>
      </form>
    </div>
  );
}
