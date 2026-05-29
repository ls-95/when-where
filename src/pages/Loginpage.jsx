import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Loginpage.css";
import backgroundImage from "../assets/when-where-background-2.webp";
import logoImage from "../assets/when-where-logo.webp";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (username === savedUsername && password === savedPassword) {
      localStorage.setItem("activeUsername", username);
      navigate("/home");
    } else {
      alert("Wrong username or password");
    }
  };

  return (
    <main
      className="login-page"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="login-background-overlay"></div>

      <div className="login-content">
        <img
          className="login-logo-image"
          src={logoImage}
          alt="When & Where logo"
        />

        <section className="login-card">
          <h2 className="login-title">Welcome</h2>
          <p className="login-subtitle">Sign in to continue your adventure</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form-group">
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>

            <div className="login-form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <button className="login-button" type="submit">
              Sign in
            </button>

            <p className="login-register-text">
              Don't have an account?
              <button
                className="login-link-button"
                type="button"
                onClick={() => navigate("/register")}
              >
                Create new account
              </button>
            </p>
          </form>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
