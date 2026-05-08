import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Loginpage.css";
import backgroundImage from "../assets/when-where-background-2.png";
import logoImage from "../assets/when-where-logo.png";

function RegisterPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const trimmedUsername = username.trim();

        if (!trimmedUsername || !password) {
            alert("Please enter username and password");
            return;
        }

        localStorage.setItem("username", trimmedUsername);
        localStorage.setItem("password", password);

        navigate("/login");
    };

    return (
        <main
            className="login-page"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="login-background-overlay"></div>

            <div className="login-content">
                <img className="login-logo-image" 
                    src={logoImage} 
                    alt="When & Where logo"/>


                <section className="login-card">
                    <h2 className="login-title">Create account</h2>
                    <p className="login-subtitle">Register account to start playing</p>

                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="login-form-group">
                            <label htmlFor="register-username">Username</label>
                            <input
                                id="register-username" 
                                type="text"
                                placeholder="Enter username" 
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>

                        <div className="login-form-group">
                            <label htmlFor="register-password">Password</label>
                            <input 
                                id="register-password"
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>

                        <button className="login-button" type="submit">
                            Register
                        </button>

                        <p className="login-register-text">
                            Already have an account?{" "}
                            <button
                                className="login-link-button"
                                type="button"
                                onClick={() => navigate("/login")}
                            >
                                Log in
                            </button>
                        </p>
                    </form>
                </section>
            </div>
        </main>
    );
}

export default RegisterPage;