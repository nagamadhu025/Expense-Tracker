import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  // Default Login Credentials
  const DEFAULT_USER = "admin";
  const DEFAULT_PASS = "1234";

  // Reset Fields
  const resetForm = () => {
    setUsername("");
    setPassword("");
    setError("");
  };

  // Login Handler
  const handleLogin = (e) => {
    e.preventDefault();

    if (username === DEFAULT_USER && password === DEFAULT_PASS) {
      resetForm();
      navigate("/dashboard"); // Redirect
    } else {
      setError("Invalid Username or Password ❌");
    }
  };

  // Signup Handler (Demo)
  const handleSignup = (e) => {
    e.preventDefault();
    alert("Signup Successful (Demo)");
    resetForm();
    setIsSignup(false);
  };

  // Toggle Mode
  const toggleMode = () => {
    setIsSignup(!isSignup);
    resetForm();
  };

  return (
    <div className="login-container">
      <div className="login-card">

        {/* Title */}
        <h2 className="login-header">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h2>

        {/* Error */}
        {error && (
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        )}

        <form
          className="login-form"
          onSubmit={isSignup ? handleSignup : handleLogin}
        >
          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="login-input"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
            required
          />

          {/* Email (Signup only) */}
          {isSignup && (
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              required
            />
          )}

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            required
          />

          {/* Submit */}
          <button type="submit" className="login-btn">
            {isSignup ? "Sign Up" : "Login"}
          </button>

          <div className="divider"></div>

          {/* Toggle */}
          <button
            type="button"
            className="signup-btn"
            onClick={toggleMode}
          >
            {isSignup
              ? "Already have an account? Login"
              : "Don’t have an account? Sign Up"}
          </button>

        </form>

        {/* Demo Info */}
        {!isSignup && (
          <p
            style={{
              fontSize: "12px",
              textAlign: "center",
              marginTop: "10px",
              color: "#555"
            }}
          >
            {/* Demo Login → <b>admin / 1234</b> */}
          </p>
        )}

      </div>
    </div>
  );
}

export default Login;
